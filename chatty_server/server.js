const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws');
const uuidv4 = require('uuid/v4');

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });
const colors = ['#BA55D3',' #EE30A7', '#4169E1', '#708090', '#7AC5CD']

let updateClientCount = () => {
  let clientObj = {};
  clientObj.type = "connection";
  clientObj.count = wss.clients.size;
  clientObj.id = uuidv4();
  return clientObj;
};


wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
      console.log("The broadcast was sent to all connected clients");
    };
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.

wss.on('connection', (ws) => {
  let seconds = Date.now();
  let timestamp = new Date(seconds);
  console.log(`Client connected to Chatty Server at ${timestamp}`);

  wss.broadcast(updateClientCount());
  const color = '#'+Math.floor(Math.random()*16777215).toString(16);

  ws.on('message', function incoming(message) {
    let newMessage = JSON.parse(message);

    switch(newMessage.type){
      case "changedName":
      console.log(newMessage.type)
      newMessage.id = uuidv4();
      wss.broadcast(newMessage);
      break;
      default:
      newMessage.id = uuidv4();
      newMessage.color = color;
      wss.broadcast(newMessage);
      }
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.

  ws.on('close', () => {
    console.log('Client disconnected from Chatty Server');
    console.log("Number of connections:", wss.clients.size);

    // Update # of connections
    wss.broadcast(updateClientCount());
  });
});


