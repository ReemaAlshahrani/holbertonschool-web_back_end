#!/usr/bin/env python3
from typing import Sequence, Any, Optional


# The types of the elements of the input are not known
def safe_first_element(lst: Sequence[Any]) -> Optional[Any]:
    """Return the first element of a sequence safely."""
    if lst:
        return lst[0]
    else:
        return None
