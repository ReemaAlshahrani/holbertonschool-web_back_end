#!/usr/init/env python3
"""Module to insert a new document into a MongoDB collection using Python."""


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs

    and returns the new _id.
    """
    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
