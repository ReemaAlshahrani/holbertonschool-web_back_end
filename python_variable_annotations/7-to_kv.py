#!/usr/bin/env python3
"""Module that takes a string and an int/float, returning a tuple."""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple containing the string k and the square of v as a float."""
    return (k, v * v)
