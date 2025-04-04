import express from 'express';
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

// Any middleware you need
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
  },
});

export const getReceiverSocketId=(receiverId)=>{
    return userSocketMap[receiverId];
}

const userSocketMap ={
    // userId:"socketId"
}; 
//{userId-->socketId}
// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('User connected with ID:', socket.id);

  const userId= socket.handshake.query.userId;
  if(userId!== undefined){
    userSocketMap[userId]= socket.id;
  }


io.emit('getOnlineUsers',Object.keys(userSocketMap));

socket.on('disconnect',()=>{
    console.log('user disconnected', socket.id);
    delete userSocketMap[userId];
    io.emit('getOnlineUsers',Object.keys(userSocketMap));

})
});


// Start the server
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app, io, server };