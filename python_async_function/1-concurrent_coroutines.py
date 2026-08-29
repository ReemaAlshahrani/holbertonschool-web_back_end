#!/usr/bin/env python3
"""
Module documentation: A module for running multiple coroutines concurrently.
"""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int = 10) -> List[float]:
    """Spawns wait_random n times with the specified max_delay

    and returns the list of all the delays in ascending order.
    """
    # Create a list of tasks by spawning wait_random n times
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]

    # Gather results from all concurrent tasks
    delays = await asyncio.gather(*tasks)

    return sorted(delays)
