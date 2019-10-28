import styled from 'styled-components';

export const JoinContainer = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	height: 100vh;
	align-items: center;
	background-color: #1A1A1D;
`;

export const JoinRoomWrapper =styled.div`
	width: 20%;
`;

export const Button = styled.button`
	color: #fff !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #2979FF;
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