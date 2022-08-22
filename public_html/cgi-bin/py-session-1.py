#!/usr/bin/python3
import os
import sys

def main():
 
    # print HTML header	
    print("Cache-Control: no-cache")

    username = ""
    for line in sys.stdin:
        username = username + line
        ct = len(username)
        if ct > 1000:
            break

  # Check to see if a proper name was sent
    name = ""
    if len(username) > 0:
    	if username[0] == 'u':
        	name = username[9:len(username)-1]

  # Set the cookie using a header, add extra \n to end headers
    if len(name) > 0:
        print("Content-type: text/html")
        print("Set-Cookie: " + name +"\n")
    else:
        print("Content-type: text/html\n")

  # Body - HTML
    print("<html>")
    print("<head><title>Python Sessions</title></head>\n")
    print("<body>")
    print("<h1>Python Sessions Page 1</h1>")
    print("<table>")

  # First check for new Cookie, then Check for old Cookie
    ck =os.environ['HTTP_COOKIE']
    # f'{}'
    if len(name) > 0:
        print("<tr><td>Cookie:</td><td>" + name +"</td></tr>\n")
    elif f'{ck}' != None and f'{ck}' == "destroyed":
        print("<tr><td>Cookie:</td><td>"+ f'{ck}'+"</td></tr>\n")
    else:
        print("<tr><td>Cookie:</td><td>None</td></tr>\n")

    print("</table>")

    # Links for other pages
    print("<br />")
    print("<a href=\"/cgi-bin/py-session-2.py\">Session Page 2</a>")
    print("<br />")
    print("<a href=\"/py-cgiform.html\">Python CGI Form</a>")
    print("<br /><br />")

    #Destroy Cookie button
    print("<form action=\"/cgi-bin/py-destroy-session.py\" method=\"get\">")
    print("<button type=\"submit\">Destroy Session</button>")
    print("</form>")

    print("</body></html>")

if __name__ == "__main__":
    main()
