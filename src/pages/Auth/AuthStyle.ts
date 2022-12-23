import { InputProps } from '@interfaces/interface';
import styled from 'styled-components';

export const AuthContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.background};
`;

export const AuthWrapper = styled.div`
	max-width: 350px;
	max-height: 400px;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	padding: 20px;
	text-align: center;
`;

export const Title = styled.p`
	font-size: 40px;
	font-weight: bold;
	color: ${({ theme }) => theme.color.darkBlue};
	margin-bottom: 12px;
`;

export const InputArea = styled.div`
	margin-top: 28px;
	text-align: left;
`;

export const Label = styled.label`
	font-size: 18px;
	color: ${({ theme }) => theme.color.darkBlue};
`;

export const Input = styled.input`
	padding: 12px 7px;
	width: 100%;
	border-radius: 5px;
	font-size: 16px;

	&:focus {
		border: 1px solid ${({ theme }) => theme.color.lightBlue};
	}
`;

export const ErrorMessage = styled.p`
	font-size: 13px;
	padding: 4px;
	color: ${({ theme }) => theme.color.red};
`;

export const Button = styled.button<InputProps>`
	border: none;
	border-radius: 5px;
	width: 100%;
	padding: 12px;
	margin: 28px 0;
	font-size: 16px;

	background-color: ${(props) =>
		props.isEmailValid && props.isPasswordValid
			? props.theme.color.darkBlue
			: props.theme.color.gray};

	color: ${({ theme }) => theme.color.white};
`;

export const AuthMode = styled.p`
	color: ${({ theme }) => theme.color.darkBlue};

	&:hover {
		cursor: pointer;
	}
`;
