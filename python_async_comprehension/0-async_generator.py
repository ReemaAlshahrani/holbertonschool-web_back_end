#!/usr/bin/env python3
"""
This module contains an asynchronous generator coroutine
that yields a random number between 0 and 10 every second.
"""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    A coroutine that loops 10 times, yields a random float
    between 0 and 10, and asynchronously waits 1 second.
    """
    for _ in range(10):
        yield random.uniform(0, 10)
        await asyncio.sleep(1)
