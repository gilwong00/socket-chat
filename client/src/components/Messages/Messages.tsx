import React from 'react';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';
import { IMessage } from '../../models/message';

interface IProps {
  messages: IMessage[];
  name: string;
}

const styles = {
  padding: '5% 0',
  overflow: 'auto',
  flex: 'auto',
};

const Messages: React.FC<IProps> = ({ messages, name }) => (
  <ScrollToBottom styles={styles}>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
