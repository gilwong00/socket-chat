import React from 'react';
import { InputForm, MessageInput, SendButton } from './elements';

interface IProps {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: (
    e: React.KeyboardEvent<HTMLInputElement> | React.SyntheticEvent
  ) => void;
}

const Input: React.FC<IProps> = ({ message, setMessage, sendMessage }) => (
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

export default Input;
