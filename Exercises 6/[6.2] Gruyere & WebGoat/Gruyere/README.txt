XSS Vulnerability in File upload----------------------------
 - Create file file-upload-xss.html with content <script>alert('poop')</script>
 - Click "Upload" -> upload file.
 - Opening the uploaded file will execute the script in the context of gruyere allowing you to e.g. steal other users sessions when they open that file.
 
Reflected XSS Vulnerability on error pages------------------
http://google-gruyere.appspot.com/161998300381/sdgdfg%3Cscript%3Ealert()%3C/script%3E
The last URL parameter is not properly escaped before printing to the page.


