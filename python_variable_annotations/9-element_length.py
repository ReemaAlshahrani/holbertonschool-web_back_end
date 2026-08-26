#!/usr/bin/env python3
"""Module that calculates the length of elements in an iterable using type annotations."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples containing the sequence and its length."""
    return [(i, len(i)) for i in lst]
