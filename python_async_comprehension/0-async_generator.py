#!/usr/bin/env python3
"""Asynchronous generator module that yields 10 random numbers."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Loop 10 times, wait 1 second, and yield a random float between 0 and 10."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
