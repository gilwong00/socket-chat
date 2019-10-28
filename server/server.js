const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');
const userController = require('./controllers/UserController');
const isEmpty = require('lodash/isEmpty');
const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(router);

io.on('connection', socket => {
  socket.on('user joined', ({ name, room }, callback) => {
    const { err, newUser } = userController.addUser({
      id: socket.id,
      name,
      room,
    });

    if (err) {
      return callback(err);
    }

    if (!isEmpty(newUser)) {
      // success message to user if joined successfully
      socket.emit('new message', {
        user: 'admin',
        text: `welcome ${newUser.name} to ${newUser.room} room`,
      });

      // broadcasting to all other users in the room
      socket.broadcast.to(newUser.room || room).emit('new message', {
        user: 'admin',
        text: `${newUser.name} has joined`,
      });

      socket.join(newUser.room);

      io.to(newUser.room || room).emit('room data', {
        room: newUser.room,
        totalUsers: userController.getAllUsersInRoom(newUser.room),
      });

      callback();
    }
  });

  socket.on('send message', (message, callback) => {
    const user = userController.getUser(socket.id);

    if (user) {
      io.to(user.room || room).emit('new message', {
        user: user.name,
        text: message,
      });

      io.to(user.room).emit('room data', {
        room: user.room,
        totalUsers: userController.getAllUsersInRoom(user.room),
      });
    }
    callback();
  });

  socket.on('disconnect', () => {
    const user = userController.getUser(socket.id);
    userController.removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('send message', {
        user: 'admin',
        text: `${user.name} has left`,
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
