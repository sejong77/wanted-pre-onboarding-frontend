import styled from 'styled-components';

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 12px;
`;

export const Title = styled.span`
	font-size: 48px;
	font-weight: bold;
`;

export const Logout = styled.button`
	padding: 12px;
	font-size: 16px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.color.lightBlue};
	color: ${({ theme }) => theme.color.white};
`;
