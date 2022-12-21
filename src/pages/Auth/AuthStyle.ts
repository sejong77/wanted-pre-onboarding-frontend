import { InputProps } from '@interfaces/interface';
import styled from 'styled-components';

export const AuthContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #d5e9ee;
`;

export const AuthWrapper = styled.div`
	max-width: 350px;
	width: 100%;
	border: 1px solid #9c9c9c;
	text-align: center;
	padding: 20px 0;
	background-color: #ffffff;
`;

export const Title = styled.p`
	font-size: 30px;
	font-weight: bold;
`;

export const Form = styled.form`
	padding: 10px 40px 30px 40px;
`;

export const Input = styled.input`
	padding: 7px;
	width: 100%;
	background-color: #fafafa;
	border: 1px solid #9c9c9c;
	margin-top: 28px;
	box-sizing: border-box;

	&:focus {
		outline: 1px solid #4dbeff;
		border: 1px solid #4dbeff;
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
	margin-top: 28px;

	background-color: ${(props) =>
		props.isEmailValid && props.isPasswordValid ? '#4dbeff' : '#c3c3c3'};

	color: ${(props) => (props.isEmailValid && props.isPasswordValid ? '#ffffff' : '#777')};

	&:hover {
		cursor: pointer;
	}
`;

export const AuthMode = styled.p`
	color: #666666;

	&:hover {
		cursor: pointer;
	}
`;
