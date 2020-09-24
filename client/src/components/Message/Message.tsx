import React from 'react';
import ReactEmoji from 'react-emoji';
import styled from 'styled-components';
import { IMessage } from '../Message';

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`;

export const SentMessage = styled(MessageContainer)`
  justify-content: flex-end;
`;

export const ReceivedMessage = styled(MessageContainer)`
  justify-content: flex-start;
`;

export const SentMessageText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;
`;

export const RightSentText = styled(SentMessageText)`
  padding-right: 10px;
`;

export const LeftSentText = styled(SentMessageText)`
  padding-left: 10px;
`;

export const MessageBox = styled.div`
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

export const DarkMessageBox = styled(MessageBox)`
  background: #2979ff;
`;

export const LightMessageBox = styled(MessageBox)`
  background: #f3f3f3;
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
`;

export const WhiteMessageText = styled(MessageText)`
  color: white;
`;

export const DarkMessageText = styled(MessageText)`
  color: #353535;
`;

interface IProps {
  message: IMessage;
  name: string;
}

const Message: React.FC<IProps> = ({ message, name }) => {
  const { user, text } = message;
  const displayName = name.trim().toLowerCase();
  const isUserMessage = user === displayName;

  return isUserMessage ? (
    // sent messages
    <SentMessage>
      <RightSentText>{displayName}</RightSentText>
      <DarkMessageBox>
        <WhiteMessageText>{ReactEmoji.emojify(text)}</WhiteMessageText>
      </DarkMessageBox>
    </SentMessage>
  ) : (
    // received messages
    <ReceivedMessage>
      <LightMessageBox>
        <DarkMessageText>{ReactEmoji.emojify(text)}</DarkMessageText>
      </LightMessageBox>
      <LeftSentText>{user}</LeftSentText>
    </ReceivedMessage>
  );
};

export default Message;
