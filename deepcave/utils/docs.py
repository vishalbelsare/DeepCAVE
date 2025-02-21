# Copyright 2021-2024 The DeepCAVE Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#  noqa: D400
"""
# Docs

This module provides a function to convert reStructuredText (RST) to MarkDown (MD).
"""

from __future__ import annotations

import re
from pathlib import Path


def rst_to_md(filename: str | Path) -> str:
    """
    Convert a subset of reStructuredText (RST) to MarkDown (MD).

    Parameters
    ----------
    filename : str | Path
        The path to the reStructuredText (RST) file.

    Returns
    -------
    str
        The converted data in MarkDown (MD) format.
    """
    if isinstance(filename, Path):
        filename = str(filename)

    with open(filename, "r") as file:
        data = file.read()

    # Remove reference
    result = re.finditer(r":ref:`(.*?)<(.*?)>`", data)
    for match in result:
        a = match.group(0)
        b = f"``{match.group(1)}``"
        data = data.replace(a, b)

    # Remove terms
    result = re.finditer(r":term:`(.*?) <(.*?)>`", data)
    for match in result:
        a = match.group(0)
        b = f"``{match.group(1)}``"
        data = data.replace(a, b)

    # Changing links
    result = re.finditer(r"`(.*?) <(.*?)>`_", data)
    for match in result:
        a = match.group(0)
        b = f"[{match.group(1)}]({match.group(1)})"
        data = data.replace(a, b)

    # Remove images
    result = re.finditer(r".. image::(.*?)\n", data)
    for match in result:
        a = match.group(0)
        data = data.replace(a, "")

    # Remove notes/warnings (not the best implementation but sufficient for now)
    data = data.replace(".. note::", "#### Note\n-----")
    data = data.replace(".. note ::", "#### Note\n-----")
    data = data.replace(".. warning::", "#### Warning\n-----")
    data = data.replace(".. warning ::", "#### Warning\n-----")
    data = data.replace(".. code::", "#### Code\n-----")
    data = data.replace(".. code ::", "#### Code\n-----")

    # Remove last \n
    if data.endswith("\n"):
        data = data[:-2]

    return data
