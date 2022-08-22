#!/usr/bin/python3
import os
from urllib.parse import urlparse, parse_qs
import sys

def main():
 
    # print HTML header	
    print("Cache-Control: no-cache")
    print("Content-type: text/html\n")
    print("<html><head><title>POST Message Body</title></head><body><h1 align=center>POST Message Body</h1><hr/>")

    ct = 0
    print("Message Body: " , end='')
    for line in sys.stdin:
        print(line, end='')
        ct = ct + len(line)
        if ct > 1000:
            break
    print("\n<br/>")
    print("</body></html>")

if __name__ == "__main__":
    main()
