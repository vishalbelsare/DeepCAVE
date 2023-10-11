"""
# FootPrint.

This module provides utilities to visualize a configuration footprint.

The module contains a static plugin class for defining the footprint.

## Classes
    - FootPrint: Visualize the footprint of a configuration.
"""

from typing import Any, Callable, Dict, List, Union

import dash_bootstrap_components as dbc
import plotly.graph_objs as go
from dash import dcc, html

from deepcave import config
from deepcave.evaluators.footprint import Footprint as Evaluator
from deepcave.plugins.static import StaticPlugin
from deepcave.utils.layout import get_select_options, help_button
from deepcave.utils.styled_plot import plt
from deepcave.utils.styled_plotty import (
    get_color,
    get_hovertext_from_config,
    save_image,
)


class FootPrint(StaticPlugin):
    """
    Visualize the footprint of a configuration.

    Represents a static plugin for the footprint.

    Attributes
    ----------
    id
        Identifies the plugin.
    name
        The name of the plugin.
    icon
        The icon representation of the plugin.
    help
        The path to the documentation of the plugin.
    activate_run_selection
        Defines whether the run selection feature is activated.
    """

    id = "footprint"
    name = "Configuration Footprint"
    icon = "fas fa-shoe-prints"
    help = "docs/plugins/configuration_footprint.rst"
    activate_run_selection = True

    @staticmethod
    def get_input_layout(register: Callable) -> List[Union[dbc.Row, html.Div]]:
        """
        Get the input layout as html container and dash bootstrap component.

        Parameters
        ----------
        register : (str, str | List[str]) -> str
            Used to get the id for the select object and the slider.

        Returns
        -------
        An html container and a dash bootstrap component of the layout of the input.
        """
        return [
            dbc.Row(
                [
                    dbc.Col(
                        [
                            dbc.Label("Objective"),
                            dbc.Select(
                                id=register("objective_id", ["value", "options"], type=int),
                                placeholder="Select objective ...",
                            ),
                        ],
                        md=6,
                    ),
                    dbc.Col(
                        [
                            dbc.Label("Budget"),
                            help_button(
                                "Combined budget means that the trial on the highest"
                                " evaluated budget is used.\n\n"
                                "Note: Selecting combined budget might be misleading if"
                                " a time objective is used. Often, higher budget take "
                                " longer to evaluate, which might negatively influence "
                                " the results."
                            ),
                            dbc.Select(
                                id=register("budget_id", ["value", "options"], type=int),
                                placeholder="Select budget ...",
                            ),
                        ],
                        md=6,
                    ),
                ],
                className="mb-3",
            ),
            html.Div(
                [
                    dbc.Label("Details"),
                    help_button(
                        "The details parameter controls the resolution of the surface plot."
                    ),
                    dcc.Slider(
                        id=register("details", "value", type=float),
                        min=0.1,
                        max=0.9,
                        step=0.4,
                        marks={0.1: "Low", 0.5: "Medium", 0.9: "High"},
                    ),
                ],
            ),
        ]

    @staticmethod
    def get_filter_layout(register: Callable) -> List[dbc.Row]:
        """
        Get the filtered layout for a dash bootstrap component.

        Parameters
        ----------
        register : (str, str | List[str]) -> str
            Used for the id of the select object.

        Returns
        -------
        A filtered layout with a dash bootstrap component.
        """
        return [
            dbc.Row(
                [
                    dbc.Col(
                        [
                            dbc.Label("Show Border Configurations"),
                            dbc.Select(
                                id=register("show_borders", ["value", "options"]),
                                placeholder="Select ...",
                            ),
                        ],
                        md=6,
                    ),
                    dbc.Col(
                        [
                            dbc.Label("Show Support Configurations"),
                            dbc.Select(
                                id=register("show_supports", ["value", "options"]),
                                placeholder="Select ...",
                            ),
                        ],
                        md=6,
                    ),
                ]
            )
        ]

    def load_inputs(self) -> Dict[str, Dict[str, Any]]:
        """Get the inputs, containing details, and border/supports information."""
        return {
            "details": {"value": 0.5},
            "show_borders": {"options": get_select_options(binary=True), "value": "true"},
            "show_supports": {"options": get_select_options(binary=True), "value": "true"},
        }

    # Types dont match superclass
    def load_dependency_inputs(self, run, previous_inputs, inputs):
        """
        Load the objectives, budgets and their attributes.

        Parameters
        ----------
        run : AbstractRun | List[AbstractRun] | None
            The run(s) to be analyzed.
        inputs : Dict[str, Any]
            Contains information about the objectives and budgets.

        Returns
        -------
        The objective, budgets and their attributes.
        """
        # Prepare objectives
        objective_names = run.get_objective_names()
        objective_ids = run.get_objective_ids()
        objective_options = get_select_options(objective_names, objective_ids)
        objective_value = inputs["objective_id"]["value"]

        # Prepare budgets
        budgets = run.get_budgets(human=True)
        budget_ids = run.get_budget_ids()
        budget_options = get_select_options(budgets, budget_ids)
        budget_value = inputs["budget_id"]["value"]

        # Pre-set values
        if objective_value is None:
            objective_value = objective_ids[0]
            budget_value = budget_ids[-1]
        else:
            budget_value = inputs["budget_id"]["value"]

        return {
            "objective_id": {
                "options": objective_options,
                "value": objective_value,
            },
            "budget_id": {
                "options": budget_options,
                "value": budget_value,
            },
        }

    @staticmethod
    # Types dont match superclass
    def process(run, inputs):
        """
        Process the data to create different data points.

        These points include, border, incumbent, support, performance, area and configurations.

        Parameters
        ----------
        run : AbstractRun
            The run to be analyzed.
        inputs : Dict[str, Any]
            Containing budget, objective and details information.

        Returns
        -------
        A dictionary of the different data points.
        """
        budget = run.get_budget(inputs["budget_id"])
        objective = run.get_objective(inputs["objective_id"])
        details = inputs["details"]

        # Initialize the evaluator
        evaluator = Evaluator(run)
        evaluator.calculate(objective, budget)

        performance_data = evaluator.get_surface(details=details, performance=True)
        area_data = evaluator.get_surface(details=details, performance=False)
        config_points = evaluator.get_points("configs")
        border_points = evaluator.get_points("borders")
        support_points = evaluator.get_points("supports")
        incumbent_points = evaluator.get_points("incumbents")

        return {
            "performance_data": performance_data,
            "area_data": area_data,
            "config_points": config_points,
            "border_points": border_points,
            "support_points": support_points,
            "incumbent_points": incumbent_points,
        }

    @staticmethod
    def get_output_layout(register: Callable) -> dbc.Tabs:
        """
        Get a dash bootstrap component for the output layout.

        Parameters
        ----------
        register : (str, str | List[str]) -> str
            Used for the id of the dash Graph.

        Returns
        -------
        A dash bootstrap component for the output layout.
        """
        return dbc.Tabs(
            [
                dbc.Tab(
                    dcc.Graph(
                        id=register("performance", "figure"), style={"height": config.FIGURE_HEIGHT}
                    ),
                    label="Performance",
                ),
                dbc.Tab(
                    dcc.Graph(
                        id=register("area", "figure"), style={"height": config.FIGURE_HEIGHT}
                    ),
                    label="Coverage",
                ),
            ]
        )

    @staticmethod
    # Types dont match superclass
    def load_outputs(run, inputs, outputs):
        """
        Load and save the output plotly figure for visualizing the footprint of the run.

        Get a heatmap for the performance and area data.

        Parameters
        ----------
        run
            The run to be analyzed.
        inputs
            Containing information about the objective, borders and supports visualization.
        outputs
            Containing information about the performance and area data.

        Returns
        -------
        The plotly figure of the footprint.
        """
        objective = run.get_objective(inputs["objective_id"])
        show_borders = inputs["show_borders"]
        show_supports = inputs["show_supports"]

        traces = []

        # First add the Heatmap
        performance_data = go.Heatmap(
            x=outputs["performance_data"][0],
            y=outputs["performance_data"][1],
            z=outputs["performance_data"][2],
            zsmooth="best",
            hoverinfo="skip",
            colorbar=dict(
                len=0.5,
                title=objective.name,
            ),
            colorscale="blues",
        )

        area_data = go.Heatmap(
            x=outputs["area_data"][0],
            y=outputs["area_data"][1],
            z=outputs["area_data"][2],
            zsmooth="best",
            hoverinfo="skip",
            colorbar=dict(
                len=0.5,
                title="Valid Configspace Area",
            ),
            colorscale="blues",
        )

        point_names = []
        point_values = []
        point_color_ids = []

        if show_borders:
            point_names += ["Border Configuration"]
            point_values += ["border_points"]
            point_color_ids += [2]
        if show_supports:
            point_names += ["Random Configuration"]
            point_values += ["support_points"]
            point_color_ids += [3]

        point_names += ["Configuration", "Incumbent"]
        point_values += ["config_points", "incumbent_points"]
        point_color_ids += [4, 1]

        # Now add the points
        for name, points, color_id in zip(point_names, point_values, point_color_ids):
            x, y, config_ids = outputs[points]
            size = 5
            marker_symbol = "x"
            if points == "incumbent_points":
                size = 10
                marker_symbol = "triangle-up"
            traces += [
                go.Scatter(
                    name=name,
                    x=x,
                    y=y,
                    mode="markers",
                    marker_symbol=marker_symbol,
                    marker={"size": size, "color": get_color(color_id)},
                    hovertext=[
                        get_hovertext_from_config(run, config_id) for config_id in config_ids
                    ],
                    hoverinfo="text",
                )
            ]

        layout = go.Layout(
            xaxis=dict(title=None, tickvals=[]),
            yaxis=dict(title=None, tickvals=[]),
            margin=config.FIGURE_MARGIN,
        )

        performance = go.Figure(data=[performance_data] + traces, layout=layout)
        area = go.Figure(data=[area_data] + traces, layout=layout)

        save_image(performance, "footprint_performance.pdf")
        save_image(area, "footprint_area.pdf")

        return [performance, area]

    @staticmethod
    def get_mpl_output_layout(register: Callable) -> List[dbc.Tabs]:
        """
        Get a dash bootstrap component of the output layout.

        Parameters
        ----------
        register : (str, str | List[str]) -> str
            Used for the id of the html image container.

        Returns
        -------
        A dash bootstrap component of the output layout
        """
        return [
            dbc.Tabs(
                [
                    dbc.Tab(
                        html.Img(id=register("performance", "src"), className="img-fluid"),
                        label="Performance",
                    ),
                    dbc.Tab(
                        html.Img(id=register("area", "src"), className="img-fluid"),
                        label="Valid Area",
                    ),
                ]
            ),
        ]

    @staticmethod
    # Types dont match superclass
    def load_mpl_outputs(run, inputs, outputs):
        """
        Load the rendered matplotlib figure of the footprint.

        Parameters
        ----------
        run
            The run to be analyzed.
        inputs
            Containing information about the objective, borders and supports visualization.
        outputs
            Containing information about the data.

        Returns
        -------
        The rendered matplotlib figure of the footprint
        """
        objective = run.get_objective(inputs["objective_id"])
        show_borders = inputs["show_borders"]
        show_supports = inputs["show_supports"]

        point_names = []
        point_values = []
        point_color_ids = []

        if show_borders:
            point_names += ["Border Configuration"]
            point_values += ["border_points"]
            point_color_ids += [2]
        if show_supports:
            point_names += ["Random Configuration"]
            point_values += ["support_points"]
            point_color_ids += [3]

        point_names += ["Configuration", "Incumbent"]
        point_values += ["config_points", "incumbent_points"]
        point_color_ids += [0, 4]

        images = []
        for data in ["performance", "area"]:
            x_, y_, z_ = outputs[data + "_data"]

            plt.figure()
            plt.grid(False)
            plt.contourf(x_, y_, z_, cmap="summer")
            cb = plt.colorbar()

            if data == "performance":
                cb.ax.set_title(objective.name)
            else:
                cb.ax.set_title("Valid Area")

            # Now add the points
            for name, points, color_id in zip(point_names, point_values, point_color_ids):
                x, y, _ = outputs[points]
                size = 3
                marker_symbol = "X"
                if points == "incumbent_points":
                    size = 10
                    marker_symbol = "^"
                # Issue opened
                color = plt.get_color(color_id)
                plt.scatter(x, y, marker=marker_symbol, s=size, label=name, c=color)

            plt.axis("off")
            plt.legend(loc="lower right")
            # Issue opened
            images += [plt.render()]

        return images
