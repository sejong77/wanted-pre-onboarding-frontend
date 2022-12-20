import * as S from '@pages/Auth/AuthStyle';

import { callPostAPI } from '@api/api';
import { setAccessToken } from '@lib/AuthLocalStorage';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '@hooks/useInput';
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

	const onSubmitForm = () => {
		if (title === '회원가입') {
			callPostAPI('auth/signup', { email: values.email, password: values.password }).then(
				(res) => {
					console.log('회원가입 데이터: ', res);
					alert('회원가입에 성공했습니다.');
					setTitle('로그인');
				},
				(err) => {
					alert('회원가입에 실패했습니다.');
					throw new Error(err);
				}
			);
		} else {
			callPostAPI('auth/signin', { email: values.email, password: values.password }).then(
				(res) => {
					setAccessToken(res.data.access_token);
					alert('로그인에 성공했습니다.');
					navigate('/todo');
				},
				(err) => {
					alert('로그인에 실패했습니다.');
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
					onSubmitForm();
				}}
			>
				<S.Input
					type="text"
					name="email"
					value={values.email}
					placeholder="email"
					onChange={onChangeHandler}
				/>

				<S.Input
					type="password"
					name="password"
					value={values.password}
					placeholder="password"
					onChange={onChangeHandler}
				/>

				<S.Button isEmailValid={values.isEmailValid} isPasswordValid={values.isPasswordValid}>
					{title}
				</S.Button>
			</S.Form>

			<Mode title={title} changeMode={changeMode} />
		</>
	);
};

export default SignForm;
