#!/usr/bin/env python3
"""Module for asynchronous generator coroutine."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Loop 10 times, asynchronously wait 1 second, and yield a random number."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
