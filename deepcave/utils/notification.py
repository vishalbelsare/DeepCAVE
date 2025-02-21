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
# Notification

This module provides utilities for creating, updating and resetting notifications.

## Classes
    - Notification: Can create, update and reset a notification.
"""
from typing import Optional, Tuple


class Notification:
    """Can create, update and reset a notification."""

    def __init__(self) -> None:
        self._update_required = False
        self._message: Optional[str] = None
        self._color: Optional[str] = None

    def reset(self) -> None:
        """Reset the notification."""
        self._update_required = False
        self._message = None
        self._color = None

    def update(self, message: str, color: str = "danger") -> None:
        """
        Update the notification.

        Parameters
        ----------
        message : str
            The message of the notification.
        color : str, optional
            The color of the notification.
            Default is "danger".
        """
        self._update_required = True
        self._message = message
        self._color = color

    def get_latest(self) -> Optional[Tuple[str, str]]:
        """
        Retrieve the latest notification and reset.

        Returns
        -------
        Optional[Tuple[str, str]]
            The latest notification
        """
        if self._update_required and self._message is not None and self._color is not None:
            result = (self._message, self._color)
            self.reset()

            return result

        return None
