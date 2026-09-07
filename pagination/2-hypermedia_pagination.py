#!/usr/bin/env python3
"""
Main file
"""

import math

Server = __import__('2-hypermedia_pagination').Server

class Server:
    def get_hyper(self, page: int = 1, page_size: int = 10):
        # Calculate the total number of pages based on dataset length and page size
        total_pages = math.ceil(len(self.dataset()) / page_size)
        
        # Retrieve the dataset items for the current page
        data = self.get_page(page, page_size)
        
        # Determine the next page number, or None if the current page is the last one
        next_page = page + 1 if page < total_pages else None
        
        # Determine the previous page number, or None if the current page is the first one
        prev_page = page - 1 if page > 1 else None
        
        # Return a dictionary containing all pagination metadata and dataset items
        return {
            "page_size": page_size,
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
