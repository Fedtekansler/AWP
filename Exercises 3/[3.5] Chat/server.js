var http = require("http");
var WebSocketServer = require("websocket").server;
	
var port = 8080;

var server = http.createServer(function(req, res) {
	console.log("Received request for:", req.url);
	res.writeHead(404);
	res.end();
});
server.listen(port);

var wsServer = new WebSocketServer({ httpServer: server });
wsServer.on("request", function(request) {
	var connection = request.accept(null, request.origin);
	
	connection.on("message", function(msg) {
		console.log("Received message", msg);
		if (msg.type == "utf8" && msg.utf8Data == "HELLO SERVER") {
			connection.send("HELLO CLIENT");
		}
	});
});