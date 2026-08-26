#!/usr/bin/env python3
"""Module providing a generic type-annotated function to retrieve values safely."""

from typing import TypeVar, Mapping, Any, Union

T = TypeVar('T')


def safely_get_value(
    dct: Mapping, key: Any, default: Union[T, None] = None
) -> Union[Any, T]:
    """Return a value from a dictionary safely using a default if not found."""
    if key in dct:
        return dct[key]
    else:
        return default
