#!/usr/bin/env python3
"""Module that defines an asynchronous generator."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Coroutinie that loops 10 times, waits 1 second, and yields a random float."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
