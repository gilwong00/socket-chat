import React from 'react';
import { Link } from 'react-router-dom';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import {
  HeaderContainer,
  RoomDisplay,
  HeaderAction,
  OnlineIcon,
} from './elements';

interface IProps {
  room: string;
}

const ChatHeader: React.FC<IProps> = ({ room }) => (
  <HeaderContainer>
    <RoomDisplay>
      <OnlineIcon src={onlineIcon} alt='online' />
      <h3>{room}</h3>
    </RoomDisplay>
    <HeaderAction>
      <Link to='/'>
        <img src={closeIcon} alt='close' />
      </Link>
    </HeaderAction>
  </HeaderContainer>
);

export default ChatHeader;
