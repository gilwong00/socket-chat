import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const JoinContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;
  background-color: #1a1a1d;
`;

export const JoinRoomWrapper = styled.div`
  width: 20%;
`;

export const Button = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
  margin-top: 20px;

  :focus {
    outline: 0;
  }
`;

export const Header = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

export const NameInput = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`;

export const RoomInput = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
  margin-top: 20px;
`;

const JoinRoom = () => {
  const [name, setName] = useState<string>('');
  const [room, setRoom] = useState<string>('');

  return (
    <JoinContainer>
      <JoinRoomWrapper>
        <Header>Join</Header>
        <div>
          <NameInput
            type='text'
            placeholder='name'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        </div>
        <div>
          <RoomInput
            type='text'
            placeholder='room'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setRoom(e.target.value)
            }
          />
        </div>
        <Link
          onClick={(e: React.SyntheticEvent) =>
            !name || !room ? e.preventDefault() : null
          }
          to={`/chat?name=${name}&room=${room}`}
        >
          <Button type='submit'>Sign In</Button>
        </Link>
      </JoinRoomWrapper>
    </JoinContainer>
  );
};

export default JoinRoom;
