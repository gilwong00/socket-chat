import React from 'react';
import ReactEmoji from 'react-emoji';
import { IMessage } from '../../models/message';
import {
  SentMessageContainer,
  ReceivedMessageContainer,
  RightSentText,
  DarkMessageBox,
  WhiteMessageText,
  LightMessageBox,
  DarkMessageText,
  LeftSentText,
} from './elements';

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
    <SentMessageContainer>
      <RightSentText>{displayName}</RightSentText>
      <DarkMessageBox>
        <WhiteMessageText>{ReactEmoji.emojify(text)}</WhiteMessageText>
      </DarkMessageBox>
    </SentMessageContainer>
  ) : (
    // received messages
    <ReceivedMessageContainer>
      <LightMessageBox>
        <DarkMessageText>{ReactEmoji.emojify(text)}</DarkMessageText>
      </LightMessageBox>
      <LeftSentText>{user}</LeftSentText>
    </ReceivedMessageContainer>
  );
};

export default Message;
