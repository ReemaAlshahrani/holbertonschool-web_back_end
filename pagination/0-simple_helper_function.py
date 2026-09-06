#!/usr/bin/env python3
"""
Module for calculating pagination index range.
"""

def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Return a tuple of size two containing a start index and an end index."""
    
    # Calculate the start index for the pagination parameters
    start_index = (page - 1) * page_size
    
    # Calculate the end index for the pagination parameters
    end_index = page_size * page
    
    return (start_index, end_index)
