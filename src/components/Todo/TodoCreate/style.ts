import styled, { css } from 'styled-components';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import theme from '@styles/theme';

export const InputWrapper = styled.div`
	position: absolute;
	bottom: 0px;
	background-color: ${({ theme }) => theme.color.background};
	width: 100%;
	height: 100%;
	max-height: 150px;
	border-radius: 15px;
	padding: 24px 12px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 12px;
`;

export const BtnWrapper = styled.div`
	position: absolute;
	bottom: -35px;
	left: 50%;
	transform: translateX(-50%);
	color: ${({ theme }) => theme.color.white};

	&:hover {
		cursor: pointer;
	}
`;

export const Button = styled(AddRoundedIcon)<{ toggle: string }>`
	background-color: ${({ toggle }) => (toggle ? theme.color.pink : theme.color.lightGreen)};
	border-radius: 50%;
	transition: transform 240ms ease-in-out;
	transform: ${({ toggle }) => toggle && css`rotate(45deg)`};
	font-size: 55px;
`;
