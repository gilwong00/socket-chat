import React from 'react';
import { Link } from 'react-router-dom';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;

export const RoomDisplay = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

export const HeaderAction = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

export const OnlineIcon = styled.img`
  margin-right: 5%;
`;

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
