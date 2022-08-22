#!/usr/bin/python3
from datetime import date
from datetime import datetime
import socket
import json
import os

def main():
    today = date.today()
    d1 = today.strftime("%d/%m/%Y")
    now = datetime.now()

    cur = now.strftime("%H:%M:%S")
    # Print HTML header
    print("Cache-Control: no-cache\r")
    print("Content-type: application/json\r\n\r")
    #print("<html><head><title>Hello CGI World</title></head><body><h1 align=cent>
    ip =os.environ['REMOTE_ADDR']
    obj = {
    "IP": f'{ip}',
    "heading": "Hello, Python!",
    "message": "This program was generated with the Python programming language",
    "time": d1 + " " + cur,
    "title":"Hello, Python!"
    }
    # convert into JSON:
    json_data = json.dumps(obj)

    print(json_data)

if __name__ == "__main__":
    main()
