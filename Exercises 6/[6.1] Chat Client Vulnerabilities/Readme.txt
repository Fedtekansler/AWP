-- XSS Vulnerability -----------------------
Our chat application is vulnerable to XSS attacks in both name input and message input fields,
since users can freely write scripts inside <script> tags that will be executed in other people's browsers. This can be used to 
	1) steal client data (there isn't really any interesting data in our case, but this may change as the application is further developed).
	2) send messages from other chat clients => could create a worm like script that spreads this way.
	3) 
We fixed the XSS vulnerability by escaping HTML tags.

[Future Improvements]
Our fix may not be sufficient if the chat application is later expanded to for example display images from users (we would need to sanitize the image urls in this case).


