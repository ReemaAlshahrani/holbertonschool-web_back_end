#!/usr/bin/env python3

index_range = __import__('0-simple_helper_function.py').index_range


class Server:
    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns the appropriate page of the dataset."""
        # Verify that both arguments are positive integers
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        
        # Calculate the start and end indexes for the page
        start, end = index_range(page, page_size)
        
        # Retrieve the dataset
        data = self.dataset()
        
        # Slice and return the requested portion of the dataset
        return data[start:end]
