import * as S from './AuthStyle';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAccessToken } from '@lib/AuthLocalStorage';
import SignForm from '@components/Auth/SignForm';

const AuthPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		if (getAccessToken()) {
			navigate('/todo');
		}
	}, [navigate]);

	return (
		<S.AuthContainer>
			<S.AuthWrapper>
				<SignForm />
			</S.AuthWrapper>
		</S.AuthContainer>
	);
};

export default AuthPage;
