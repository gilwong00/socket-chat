import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import styled from 'styled-components';
import { Message, IMessage } from '../Message';

const BottomScroll = styled(ScrollToBottom)`
  padding: '5% 0';
  overflow: 'auto';
  flex: 'auto';
`;

interface IProps {
  messages: IMessage[];
  name: string;
}

const Messages: React.FC<IProps> = ({ messages, name }) => (
  <BottomScroll>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </BottomScroll>
);

export default Messages;
