#!/usr/bin/env python3
"""
Module documentation: A module to measure the execution time of asynchronous functions.
"""

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """Measures the total execution time for wait_n(n, max_delay)

    and returns total_time / n.
    """
    # Record the start time
    start_time = time.time()

    # Run the asynchronous wait_n function synchronously
    asyncio.run(wait_n(n, max_delay))

    # Record the end time
    end_time = time.time()

    # Calculate total elapsed time
    total_time = end_time - start_time

    # Return the average time per operation
    return total_time / n
