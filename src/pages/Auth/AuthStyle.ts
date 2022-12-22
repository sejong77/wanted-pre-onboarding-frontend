import { InputProps } from '@interfaces/interface';
import styled from 'styled-components';

export const AuthContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #f5f5f5;
`;

export const AuthWrapper = styled.div`
	max-width: 350px;
	max-height: 400px;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	text-align: center;
	padding: 20px;
`;

export const Title = styled.p`
	font-size: 40px;
	font-weight: bold;
	color: #3080bf;
	text-align: left;
	margin-bottom: 12px;
`;

export const Input = styled.input`
	padding: 12px 7px;
	width: 100%;
	background-color: #fafafa;
	border: 1px solid #9c9c9c;
	box-sizing: border-box;
	font-size: 16px;

	&:focus {
		outline: 1px solid #4dbeff;
		border: 1px solid #4dbeff;
	}

	&:last-of-type {
		margin-top: 28px;
	}
`;

export const ErrorMessage = styled.p`
	text-align: left;
	font-size: 13px;
	padding: 4px;
	color: red;
`;

export const Button = styled.button<InputProps>`
	border: none;
	border-radius: 5px;
	width: 100%;
	padding: 12px;
	margin: 28px 0;
	font-size: 16px;

	background-color: ${(props) =>
		props.isEmailValid && props.isPasswordValid ? '#3080bf' : '#c3c3c3'};

	color: ${(props) => (props.isEmailValid && props.isPasswordValid ? '#ffffff' : '#777')};

	&:hover {
		cursor: pointer;
	}
`;

export const AuthMode = styled.p`
	color: #3080bf;

	&:hover {
		cursor: pointer;
	}
`;
