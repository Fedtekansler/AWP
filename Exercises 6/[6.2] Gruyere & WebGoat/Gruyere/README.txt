XSS Vulnerability in File upload--------------------
 - Create file file-upload-xss.html with content <script>alert('poop')</script>
 - Click "Upload" -> upload file.
 - Opening the uploaded file will execute the script in the context of gruyere allowing you to e.g. steal other users sessions when they open that file.
 
 
