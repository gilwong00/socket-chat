import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  JoinContainer,
  JoinRoomWrapper,
  Header,
  NameInput,
  RoomInput,
  Button,
} from './elements';

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
