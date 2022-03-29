from typing import Union

import dash_bootstrap_components as dbc
from dash_extensions.enrich import DashProxy, TriggerTransform, MultiplexerTransform, NoOutputTransform

from deepcave.config import Config, parse_config


def get_app(config: Union[Config, str] = None):
    config = parse_config(config)
    app = DashProxy(
        __name__,
        title=config.TITLE,
        update_title="",
        external_stylesheets=[dbc.themes.BOOTSTRAP, dbc.icons.FONT_AWESOME],
        suppress_callback_exceptions=True,
        transforms=[
            TriggerTransform(),  # enable use of Trigger objects
            MultiplexerTransform(),  # makes it possible to target an output multiple times in callbacks
            # ServersideOutputTransform(),  # enable use of ServersideOutput objects
            NoOutputTransform(),  # enable callbacks without output
            # BlockingCallbackTransform(),  # makes it possible to skip callback invocations while a callback is running
            # LogTransform(),  # makes it possible to write log messages to a Dash component
        ],
    )
    return app
