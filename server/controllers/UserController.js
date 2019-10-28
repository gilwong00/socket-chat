const CHAT_USERS = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const user = CHAT_USERS.find(u => u.room == room && u.name === name);

  if (user) {
    return { err: 'User already exists' };
  }

  const newUser = { id, name, room };
  CHAT_USERS.push(newUser);
  return { newUser };
};

const removeUser = id => {
  const user = CHAT_USERS.find(u => u.id === id);

  if (user) {
    return CHAT_USERS.filter(user => user.id !== id);
  }
};

const getUser = id => CHAT_USERS.find(user => user.id === id);

const getAllUsersInRoom = room => CHAT_USERS.filter(user => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getAllUsersInRoom,
};
