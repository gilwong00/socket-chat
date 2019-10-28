import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import ChatHeader from './ChatHeader';
import Input from './Input';
import Messages from '../Messages/Messages';
import { IMessage } from '../../models/message';
import { ChatContainer, Container } from './elements';

const END_POINT = `localhost:5000`;

let socket: any;

interface ILocation {
  hash: string;
  pathname: string;
  search: string;
  state: string;
}

interface IProps {
  location: ILocation;
}

const Chat: React.FC<IProps> = ({ location }) => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    const { name, room }: any = queryString.parse(location.search);

    socket = io(END_POINT);
    setName(name);
    setRoom(room);
    socket.emit('user joined', { name, room }, () => {});

    // unmounting when useEffect is done
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search]);

  // listens for new messages from server
  useEffect(() => {
    socket.on('new message', (message: IMessage) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (message) {
      socket.emit('send message', message, () => setMessage(''));
    }
  };

  return (
    <ChatContainer>
      <Container>
        <ChatHeader room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
    </ChatContainer>
  );
};

export default Chat;
