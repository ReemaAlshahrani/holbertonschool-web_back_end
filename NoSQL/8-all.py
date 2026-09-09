#!/usr/bin/env python3
"""Module to retrieve documents from a MongoDB collection using Python."""


def list_all(mongo_collection):
    """Retrieves and returns a list of all documents

    from the specified MongoDB collection using PyMongo.
    """
    return list(mongo_collection.find())
