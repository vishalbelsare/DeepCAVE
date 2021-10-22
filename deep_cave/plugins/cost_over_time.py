from typing import Dict, Type, Any

import dash_core_components as dcc
import dash_bootstrap_components as dbc
import dash_html_components as html
import plotly.express as px
import plotly.graph_objs as go
from dash.dependencies import Input, Output, State

import pandas as pd
import numpy as np

from deep_cave import app
from deep_cave.plugins.dynamic_plugin import DynamicPlugin
from deep_cave.utils.logs import get_logger

logger = get_logger(__name__)


class CostOverTime(DynamicPlugin):
    def __init__(self):
        super().__init__()

    @staticmethod
    def id():
        return "cost_over_time"

    @staticmethod
    def name():
        return "Cost Over Time"

    @staticmethod
    def position():
        return 5

    @staticmethod
    def category():
        return "Performance Analysis"

    def get_input_layout(self):
        return [
            dbc.Label("Fidelity"),
            dcc.Slider(id=self.register_input(
                "fidelity", ["min", "max", "marks", "value"])),
        ]

    def get_filter_layout(self):
        return [
            dbc.FormGroup([
                dbc.Label("Logarithmic"),
                dbc.RadioItems(id=self.register_input(
                    "log", ["options", "value"], filter=True))
            ])
        ]

    def load_inputs(self, run):
        fidelities = [
            str(np.round(float(fidelity), 2)) for fidelity in run.get_budgets()]

        return {
            "fidelity": {
                "min": 0,
                "max": len(fidelities) - 1,
                "marks": {str(i): fidelity for i, fidelity in enumerate(fidelities)},
                "value": 0
            },
            "log": {
                "options": [{"label": "Yes", "value": 1}, {"label": "No", "value": 0}],
                "value": 0
            }
        }

    @staticmethod
    def process(run, params):
        fidelity_id = params["fidelity"]["value"]

        fidelity = None
        if fidelity_id is not None and fidelity_id >= 0:
            fidelity = run.get_budget(fidelity_id)

        costs, times = run.get_trajectory(fidelity)

        return {
            "times": times,
            "costs": costs,
            # "hovertext": additional
        }

    def get_output_layout(self):
        return [
            dcc.Graph(self.register_output("graph", "figure")),
        ]

    def load_outputs(self, filters, raw_outputs):
        trace = go.Scatter(
            x=raw_outputs["times"],
            y=raw_outputs["costs"],
            name="hv",
            line_shape='hv',
            # hovertext=outputs["additional"]
        )

        type = None
        if filters["log"]["value"] == 1:
            type = 'log'

        layout = go.Layout(
            xaxis=dict(
                title='Wallclock time [s]',
                type=type
            ),
            yaxis=dict(
                title='Cost',
            ),
        )

        fig = go.Figure(data=[trace], layout=layout)

        return [fig]

    def get_mpl_output_layout(self):
        return [
            dbc.Input(id=self.register_output("blub", "value", mpl=True))
        ]

    def load_mpl_outputs(self, filters, raw_outputs):
        return [filters["filter"]["value"]]
