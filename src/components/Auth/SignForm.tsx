import * as S from '@pages/Auth/AuthStyle';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '@hooks/useInput';

import { callPostAPI } from '@api/api';
import { setAccessToken } from '@lib/AuthLocalStorage';
import { SIGN_IN, SIGN_UP } from '@constants/string/Auth';
import Mode from './Mode';

const SignForm = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState<string>('로그인');

	const { values, onChangeHandler } = useInput({
		initialValue: { email: '', password: '', isEmailValid: false, isPasswordValid: false },
	});

	const changeMode = (title: string) => {
		setTitle(title);
	};

	const checkToActivateBtn = () => {
		if (values.isEmailValid && values.isPasswordValid) {
			onSubmitForm();
		}
	};

	const onSubmitForm = () => {
		if (title === '회원가입') {
			callPostAPI('auth/signup', { email: values.email, password: values.password }).then(
				(res) => {
					console.log('회원가입 데이터: ', res);
					alert(SIGN_UP.SUCCESS);
					setTitle('로그인');
				},
				(err) => {
					alert(SIGN_UP.FAIL);
					throw new Error(err);
				}
			);
		} else {
			callPostAPI('auth/signin', { email: values.email, password: values.password }).then(
				(res) => {
					setAccessToken(res.data.access_token);
					alert(SIGN_IN.SUCCESS);
					navigate('/todo');
				},
				(err) => {
					alert(SIGN_IN.FAIL);
					throw new Error(err);
				}
			);
		}
	};

	return (
		<>
			<S.Title>{title}</S.Title>

			<S.Form
				onSubmit={(e: React.FormEvent) => {
					e.preventDefault();
					checkToActivateBtn();
				}}
			>
				<S.Input
					type="text"
					name="email"
					value={values.email}
					placeholder="email"
					onChange={onChangeHandler}
				/>
				{!values.isEmailValid && values.email && (
					<S.ErrorMessage>이메일에는 @가 포함되어야 합니다.</S.ErrorMessage>
				)}

				<S.Input
					type="password"
					name="password"
					value={values.password}
					placeholder="password"
					onChange={onChangeHandler}
				/>
				{!values.isPasswordValid && values.password && (
					<S.ErrorMessage>비밀번호는 8자리 이상이어야 합니다.</S.ErrorMessage>
				)}

				<S.Button isEmailValid={values.isEmailValid} isPasswordValid={values.isPasswordValid}>
					{title}
				</S.Button>
			</S.Form>

			<Mode title={title} changeMode={changeMode} />
		</>
	);
};

export default SignForm;
