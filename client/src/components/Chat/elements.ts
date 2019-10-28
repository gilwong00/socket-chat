import styled from 'styled-components';

export const ChatContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: #1A1A1D;

	@media (min-width: 320px) and (max-width: 480px) {
		height: 100%;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: #FFFFFF;
	border-radius: 8px;
	height: 60%;
	width: 35%;

	@media (min-width: 320px) and (max-width: 480px) {
		width: 100%;
		height: 100%;	
	}

	@media (min-width: 480px) and (max-width: 1200px) {
		width: 60%;
	}
`;

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

export const InputForm = styled.form`
	display: flex;
	border-top: 2px solid #d3d3d3;
`;

export const MessageInput = styled.input`
	border: none;
	border-radius: 0;
	padding: 5%;
	width: 80%;
	font-size: 1.2em;

	:focus {
		outline: none;
	}
`;

export const SendButton = styled.button`
	color: #fff !important;
	text-transform: uppercase;
	text-decoration: none;
	background: #2979ff;
	padding: 20px;
	display: inline-block;
	border: none;
	width: 20%;
`;