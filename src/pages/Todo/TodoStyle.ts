import styled from 'styled-components';

export const TodoContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.color.mint};
`;

export const TodoWrapper = styled.div`
	max-width: 550px;
	max-height: 650px;
	width: 100%;
	height: 100%;
	border-radius: 15px;
	background-color: ${({ theme }) => theme.color.white};
	position: relative;
`;

export const TodoContent = styled.div`
	padding: 12px;
`;
