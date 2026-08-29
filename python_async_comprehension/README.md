# Python - Async Comprehension

This project explores asynchronous programming concepts in Python, focusing on asynchronous generators, async comprehensions, and concurrent coroutine execution using `asyncio`.

## Project Tasks

| File Name | Description |
| :--- | :--- |
| `0-async_generator.py` | An asynchronous generator that loops 10 times, waits 1 second per iteration, and yields a random float between 0 and 10. |
| `1-async_comprehension.py` | An async comprehension coroutine that collects 10 random numbers from `async_generator` and returns them. |
| `2-measure_runtime.py` | A coroutine that executes `async_comprehension` four times in parallel using `asyncio.gather` and measures the total execution time. |
