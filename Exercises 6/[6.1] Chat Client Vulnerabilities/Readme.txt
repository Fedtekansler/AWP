-- XSS Vulnerability -----------------------
Our chat application is vulnerable to XSS attacks in both name input and message input fields,
since users can freely write scripts inside <script> tags that will be executed in other people's browsers. This can be used to 
	1) steal client data (there isn't really any interesting data in our case, but this may change as the application is further developed).
	2) send messages from other chat clients => could create a worm like script that spreads this way.
	3) generally perform actions on behalf of other people.
We fixed the XSS vulnerability by escaping HTML tags.

[Future Improvements]
Our fix may not be sufficient if the chat application is later expanded to for example display images from users (we would need to sanitize the image urls in this case).

-- XSRF ------------------------------------
Nothing has been done to prevent XSRF attacks, but since a chat session is never kept open such an attack can do nothing more than create new chat connections from other people's computers.

[Future Improvements]
If the chat is improved to keep users logged in (or just changes to a session based connection), then XSRF attacks would be far more problematic, since attackers could now again perform actions on behalf of other clients.
In this case we could fix it by associating each user session with a random token, that needs to be sent with each request. For this to be effective we would obviously need to fix the XSS vulnerability mentioned above.

-- Client State Manipulation ---------------
For now the application is not vulnerable client state manipulation attacks. An easy (and perhaps unimportant) security hole to make would have been let users keep their username locally and send it to the server with each message. This would let attackers change username to anything they want (at least if the server code trusts the username sent by the client).