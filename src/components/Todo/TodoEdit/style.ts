import styled, { css, keyframes } from 'styled-components';

export const BackDrop = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgb(0, 0, 0, 0.1);
`;

export const Container = styled.div<{ show: string }>`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${({ theme }) => theme.color.background};
	width: 500px;
	height: 180px;
	z-index: 10;
	text-align: center;
	transition: all 0.3s ease-out;

	opacity: ${(prop) => (prop.show === 'entering' ? '1' : prop.show === 'exiting' ? '0' : null)};
	animation: ${(prop) =>
		prop.show === 'entering'
			? css`
					${FadeIn} 0.3s ease-in
			  `
			: prop.show === 'exiting'
			? css`
					${FadeOut} 0.3s ease-in
			  `
			: null};
`;

export const Wrapper = styled.div`
	margin: 18px 0;
	padding: 0 12px;
`;

export const Title = styled.p`
	padding: 12px;
	background-color: ${({ theme }) => theme.color.lightBlue};
	color: ${({ theme }) => theme.color.white};
	font-size: 18px;
`;

export const Input = styled.input`
	padding: 8px;
	width: 100%;
`;

export const CheckBoxWrapper = styled.div`
	margin: 8px 0;
	display: flex;
	align-items: center;
`;

export const BtnWrapper = styled.div`
	margin: 18px 0;
`;

const sharedButtonStyle = css`
	margin: 0 12px;
	padding: 6px 12px;
	border-radius: 6px;
	color: ${({ theme }) => theme.color.white};
	border: none;
`;

export const EditBtn = styled.button`
	${sharedButtonStyle};
	background-color: ${({ theme }) => theme.color.lightBlue};
`;

export const CancelBtn = styled.button`
	${sharedButtonStyle};
	background-color: ${({ theme }) => theme.color.gray};
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  1% {
    opacity: 0;
    transform: translate(-50%);
  }
  100% {
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  0% {
    opacity: 1;
  }
  90% {
    transform: translate(-50%);
  }
  100% {
    opacity: 0;
  }
`;
