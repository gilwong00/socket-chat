import styled from 'styled-components';

export const SentMessageContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 5%;
	margin-top: 3px;
	justify-content: flex-end;
`;

export const ReceivedMessageContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0 5%;
	margin-top: 3px;
	justify-content: flex-start;
`;

export const RightSentText = styled.p`
	display: flex;
	align-items: center;
	font-family: Helvetica;
	color: #828282;
	letter-spacing: 0.3px;
	padding-right: 10px;
`;

export const LeftSentText = styled.p`
	display: flex;
	align-items: center;
	font-family: Helvetica;
	color: #828282;
	letter-spacing: 0.3px;
	padding-left: 10px;
`;

export const DarkMessageBox = styled.div`
	background: #2979ff;
	border-radius: 20px;
	padding: 5px 20px;
	color: white;
	display: inline-block;
	max-width: 80%;
`;

export const WhiteMessageText = styled.p`
	width: 100%;
	letter-spacing: 0;
	float: left;
	font-size: 1.1em;
	word-wrap: break-word;
	color: white;
`;

export const LightMessageBox = styled.div`
	background: #f3f3f3;
	border-radius: 20px;
	padding: 5px 20px;
	color: white;
	display: inline-block;
	max-width: 80%;
`;

export const DarkMessageText = styled.div`
	width: 100%;
	letter-spacing: 0;
	float: left;
	font-size: 1.1em;
	word-wrap: break-word;
	color: #353535;
`;
