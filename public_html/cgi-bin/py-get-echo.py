#!/usr/bin/python3
import os
from urllib.parse import urlparse, parse_qs

def main():
 
    # print HTML header	
    print("Cache-Control: no-cache")
    print("Content-type: text/html\n")
    print("<html><head><title>GET query string</title></head><body><h1 align=center>GET query string</h1><hr/>")
    import os
 
    qr =os.environ['QUERY_STRING']
    print("Raw query string: " + f'{qr}' + "\n<br/><br/>")
    print("<table> Formatted Query String:")
    
    parsed_url = urlparse(f'{qr}')
    parse_qs(parsed_url.query)
        
    print("</table>")
    print("</body></html>")

if __name__ == "__main__":
    main()
