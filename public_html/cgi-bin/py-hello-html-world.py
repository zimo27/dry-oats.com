#!/usr/bin/python3
from datetime import date
from datetime import datetime
import socket
import os

def main():
    # Print HTML header
    print("Cache-Control: no-cache")
    print("Content-type: text/html\n")
    today = date.today()
    now = datetime.now()
    curr = now.strftime("%H:%M:%S")
    d1 = today.strftime("%d/%m/%Y")
    print("<html><head><title>Hello CGI World</title></head><body><h1 align=center>Hello HTML World</h1><hr/>\n")

    print("Hello World<br/>")
    print("This program was generated at: " + curr + " " + d1 + "<br/>")
    ip =os.environ['REMOTE_ADDR']
    print("Your current IP address is: " + f'{ip}' + "<br/>")
    # Print HTML footer
    print("</body></html>")

if __name__ == "__main__":
    main()
