--------------------------------------------------------------------------
XSS Vulnerability in File upload----------------------------
 - Create file file-upload-xss.html with content <script>alert('poop')</script>
 - Click "Upload" -> upload file.
 - Opening the uploaded file will execute the script in the context of gruyere allowing you to e.g. steal other users sessions when they open that file.
 
Reflected XSS Vulnerability on error pages------------------
http://google-gruyere.appspot.com/161998300381/sdgdfg%3Cscript%3Ealert()%3C/script%3E
The last URL parameter is not properly escaped before printing to the page.

Stored XSS Vulnerability in snippets------------------------
<b onmouseover="javascript:alert('poop')">DON'T MOUSE OVER THIS</b>

Stored XSS Vulnerability in AJAX----------------------------
Couldn't find any stored XSS attacks that work via AJAX in chrome.

Reflected XSS via AJAX--------------------------------------
http://google-gruyere.appspot.com/977479975090/feed.gtl?uid=%3Cscript%3Ealert(1337)%3C/script%3E
This makes a call via AJAX and just need a uid parameter to be set to work, however, it can still
execute scripts. This will throw an alert with 1337. 

--------------------------------------------------------------------------
Client-State Manipulation attacks----------------------------
To DO..