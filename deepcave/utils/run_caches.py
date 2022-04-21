from typing import Iterator, Optional, Union

import shutil

from deepcave.runs import AbstractRun
from deepcave.utils.cache import Cache
from deepcave.utils.hash import string_to_hash
from deepcave.utils.logs import get_logger


class RunCaches:
    """
    Holds the caches for the selected runs. The caches are used for the plugins to store the
    raw outputs so that raw outputs must not be calculated again.
    """

    def __init__(self, config: "Config"):
        self.cache_dir = config.CACHE_DIR / "run_cache"
        self.logger = get_logger("RunCache")
        self._debug_mode = config.DEBUG

    def __getitem__(self, run: AbstractRun) -> Cache:
        if not isinstance(run, AbstractRun):
            raise TypeError(f"Expect Run but got type {type(run)} ({run}).")

        # Create cache
        filename = self.cache_dir / f"{run.id}.json"
        cache = Cache(filename, debug=self._debug_mode)

        if not filename.exists():
            self.logger.info(
                f"Creating new cache file for {run.name} at {filename.absolute().resolve()}"
            )
            cache.initialize_run(run)

        return cache

    def update_required(self, run: AbstractRun) -> bool:
        cache = self[run]

        # Check whether hash is up-to-date
        current_hash = cache.get("hash")
        if current_hash != run.hash:
            self.logger.info(f"Hash for {run.name} has changed!")
            return True

        return False

    def __contains__(self, run: Union[AbstractRun, str]) -> bool:
        if isinstance(run, AbstractRun):
            run_path = run.path
        else:
            run_path = run

        # Check directory for
        for path in self.cache_dir.iterdir():
            if path == run_path:
                return True

        return False

    def __iter__(self) -> Iterator[Cache]:
        for cache_file in self.cache_dir.iterdir():
            yield Cache(cache_file, debug=self._debug_mode)

    def clear_all_caches(self) -> None:
        """Removes all caches"""
        shutil.rmtree(self.cache_dir)