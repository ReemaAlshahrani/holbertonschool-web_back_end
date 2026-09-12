#!/usr/bin/env python3
""" Nginx logs statistics stored in MongoDB """
from pymongo import MongoClient

if __name__ == "__main__":
    # Connect to MongoDB client running on the local server
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # Count and print the total number of logs in the collection
    number_of_logs = nginx_collection.count_documents({})
    print("{} logs".format(number_of_logs))

    # Print the methods header
    print("Methods:")

    # List of HTTP methods to track in the required order
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    
    # Loop through each method and count its occurrences dynamically
    for i in methods:
        count = nginx_collection.count_documents({"method": i})
        print("\tmethod {}: {}".format(i, count))

    # Count and print the number of logs matching method GET and path /status
    status_checks = nginx_collection.count_documents({
        "method": "GET", 
        "path": "/status"
    })
    print("{} status check".format(status_checks))
