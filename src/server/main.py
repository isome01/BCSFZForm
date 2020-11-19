import csv
import json
import os
from flask import Flask
import re

app = Flask(f'{__name__}')  # instantiate server

def read_data():
    json_data = []
    with open(f'{os.getcwd()}/src/server/domo-data.csv', 'r') as domo_data_rows:
        # retrieve data from file
        domo_data = [row for row in csv.reader(domo_data_rows, delimiter=',')]

        # map contents to their perspective headers
        headers = domo_data[0]
        data = domo_data[1:]
        header_count = len(headers)
        row_count = len(data)
        for row in data:
            obj = {}
            for index in range(0, header_count, 1):
                header = headers[index].replace(' ', '_').lower() if headers[index] else ''
                if header:
                    obj[header] = row[index]
            json_data.append(obj)

    return json_data


@app.route('/')
def retrieve_data():
    data = read_data()
    return {
        'data': data,
        'meta': {}
    }

app.run()
