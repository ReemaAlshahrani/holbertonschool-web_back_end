#!/usr/bin/env python3
"""Module for type checking demonstration using mypy."""

from typing import List, Tuple


def zoom_array(lst: Tuple, factor: int = 2) -> List:
    """Zoom in on a tuple by repeating its items."""
    # Create a list of repeated items using list comprehension
    zoomed_in: List = [
        item for item in lst
        for i in range(factor)
    ]
    return zoomed_in


# Define input data as a Tuple and call the function
array = (12, 72, 91)

zoom_2x = zoom_array(array)
zoom_3x = zoom_array(array, 3)
