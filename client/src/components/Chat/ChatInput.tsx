import React from 'react';
import styled from 'styled-components';

export const InputForm = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

export const MessageInput = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;

  :focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;

interface IProps {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: (
    e: React.KeyboardEvent<HTMLInputElement> | React.SyntheticEvent
  ) => void;
}

const ChatInput: React.FC<IProps> = ({ message, setMessage, sendMessage }) => (
  <InputForm>
    <MessageInput
      type='text'
      placeholder='Say something nice'
      value={message}
      onChange={(e: React.FormEvent<HTMLInputElement>) =>
        setMessage(e.currentTarget.value)
      }
      onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
    />
    <SendButton onClick={e => sendMessage(e)}>Send</SendButton>
  </InputForm>
);

export default ChatInput;
