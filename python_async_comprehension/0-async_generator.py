#!/usr/bin/env python3
"""Module that provides an asynchronous generator coroutine
yielding random floating-point numbers after a one-second delay."""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Iterate ten times, waiting one second per iteration
    before yielding a random float between zero and ten."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
