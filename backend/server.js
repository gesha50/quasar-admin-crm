const express = require('express');
const {createServer} =  require('http');
const {Server} = require('socket.io');
const cors = require('cors');


const app = express();
const server = createServer(app);

app.use(cors());
const io = new Server(server, {
  cors: {
    origin: "http://localhost:8080",
    credentials: true,
  },
  allowEIO3: true
})


// let userMsgQueue = new Queue();

io.on("connection", socket => {

  console.log('connection good')

  socket.on('createMessage', data => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text+' Server'
      })
    }, 500)
  })

  // or with emit() and custom event names
  // socket.broadcast.emit("greetings", "Hey! good!");
  //
  // // handle the event sent with socket.send()
  // socket.on("message", (data) => {
  //   console.log(data);
  // });
  //
  // // handle the event sent with socket.emit()
  // socket.on("salutations", (elem1, elem2, elem3) => {
  //   console.log(elem1, elem2, elem3);
  // });
  // socket.on('counterChange', counter => {
  //   socket.emit("message", counter);
  //   socket.broadcast.emit("message", counter);
  // })
});

const PORT = 3001;
server.listen(PORT);
