#!/usr/bin/python3
import os
import sys

def main():
 
    # print HTML header	
    print("Cache-Control: no-cache")
    print("Content-type: text/html\n")
    print("<html><head><title>General Request Echo</title></head><body><h1 align=center>General Request Echo</h1><hr/>")

    sp =os.environ['SERVER_PROTOCOL']
    rm =os.environ['REQUEST_METHOD']

    print("<table>\n")
    print("<tr><td>Protocol:</td><td>" + f'{sp}' + "</td></tr>\n")
    print("<tr><td>Method:</td><td>" + f'{rm}' + "</td></tr>\n")
    print("<tr><td>Message Body:</td><td>"  , end='') 

    ct = 0
    for line in sys.stdin:
        print(line, end='')
        ct = ct + len(line)
        if ct > 1000:
            break
    print("</td></tr>\n")
    print("</body></html>")

if __name__ == "__main__":
    main()
