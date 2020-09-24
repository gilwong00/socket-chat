import React, { useState, useEffect } from 'react';
import { ChatHeader, ChatInput } from '.';
import { Messages } from '../Messages';
import { IMessage } from '../Message';
import io from 'socket.io-client';
import queryString from 'query-string';
import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1a1a1d;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  height: 60%;
  width: 35%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%;
  }
`;

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
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
    </ChatContainer>
  );
};

export default Chat;
