var http = require("http");
var WebSocketServer = require("websocket").server;
	
var port = 8080;
var nextConnectionId = 1; // Global counter for assigning IDs to connections
var connections = []; 

var server = http.createServer(function(req, res) {
	console.log("Received request for:", req.url);
	res.writeHead(404);
	res.end();
});
server.listen(port);

var wsServer = new WebSocketServer({ httpServer: server });
console.log("Started chat server on port "+port);
wsServer.on("request", function(request) {
	var connection = request.accept(null, request.origin);
	var connectionId = nextConnectionId++;
	connection.connectionId = connectionId;
	connection.nickname = null;
	connection.isLoggedIn = false;
	connections.push(connection); // Save connection
	connection.on("message", function(msg){
		handleClientMessage(connection, msg);
	});
	connection.on("close", function(msg){
		var nickname = connection.nickname;
		var idx = connections.findIndex(function(conn){return conn.connectionId === connection.connectionId;});
		if(idx > -1){
			connections.splice(idx, 1);
		}
		connections.forEach(function(conn){
			if(conn.isLoggedIn){
				conn.send(JSON.stringify({"type": "chatter-left", "nickname": nickname}));
			}
		});
	});
});

function handleClientMessage(connection, rawMsg){
	console.log("Received message", rawMsg, connection.connectionId);
	if (rawMsg.type != "utf8") {
		return; // We only speak UTF-8
	}
	
	var msg = JSON.parse(rawMsg.utf8Data);
	
	switch(msg.type){
		case "login":
			var nickname = msg.nickname;
			var nicknameIsInUse = connections.some(function(conn){
				return conn.nickname === nickname;
			});
			if(nicknameIsInUse || nickname.length == 0){
				connection.send(JSON.stringify({"type": "nickname-unavailable", "nickname": nickname}));
				return;
			}
			connection.nickname = nickname;
			connection.isLoggedIn = true;
			connection.send(JSON.stringify({"type": "login-successful", "nickname": nickname}));
			connections.forEach(function(conn){
				if(conn.connectionId == connection.connectionId){
					return;
				}
				conn.send(JSON.stringify({"type": "chatter-joined", "nickname": nickname}));
			});
			break;
		case "speak":
			if(msg.message.length <= 0 || !connection.isLoggedIn){
				return;
			}
			connections.forEach(function(conn){
				if(conn.isLoggedIn){
					conn.send(JSON.stringify({"type": "speak", "nickname": connection.nickname, "message": msg.message}));
				}
			});
			break;
	}
}