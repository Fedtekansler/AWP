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

Elevation of Privilege---------------------------------------
The user can click on buttons or in general interact with the browser. We seldom check what the browser
then executes. If we send a form, this form can have hidden elements. In this case it can be exploited,
as Gruyere project have hidden elements for setting administrative privileges:

http://google-gruyere.appspot.com/977479975090/saveprofile?action=update&is_admin=True&uid=fedtekansler

This command sets some of the attributes in this form to make sure, the account fedtekansler is an administrator
after relogging the to clear the current active cookie.

Cookie Manipulation------------------------------------------

This is a bit more tricky, but once a cookie is generated and send to the user, it can't be revoked in this case.
So the trick is to get the server to send you a cookie for someone else's account. Here the data is stored in a hash,
but it does not matter, since a hash can be imitated. For example if a user tries to create an account with the name
mensura and something more like: mensura|admin|au (character max).

http://google-gruyere.appspot.com/977479975090/saveprofile?action=new&uid=mensura|admin|au&pwd=mogens

Then it will be read from left to right and validate the username even though it does not match that of the original (Mensura).
Creating an account like that would give you access to Mensura, which has admin privileges. It can be solved by querying
the database, when it needs to check the rights of a user, or it can be stored in a temporary cookie that runs out after some time.

