#!/usr/bin/env python3
"""
Module documentation: A module for asynchronous tasks.
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Waits for a random delay between 0 and max_delay seconds

    and returns it.
    """
    # Generate a random float between 0 and max_delay
    delay = random.uniform(0, max_delay)
    # Wait asynchronously for the duration of delay
    await asyncio.sleep(delay)
    return delay
