const express = require('express');
const {createServer} =  require('http');
const {Server} = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080"
  }
})

// let userMsgQueue = new Queue();

io.on("connection", socket => {
  // either with send()
  // socket.send("Hello!");

  // or with emit() and custom event names
  socket.broadcast.emit("greetings", "Hey! good!");

  // handle the event sent with socket.send()
  socket.on("message", (data) => {
    console.log(data);
  });

  // handle the event sent with socket.emit()
  socket.on("salutations", (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
  socket.on('socketsTest', text => {
    socket.emit("message", text);
    socket.broadcast.emit("message", text);

  })
});

const PORT = 3001;
server.listen(PORT);
