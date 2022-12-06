import styles from './AuthPage.module.scss';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import { callAPI } from '../../api/api';
import { getAccessToken, setAccessToken } from '../../lib/AuthLocalStorage';

const AuthPage = () => {
	const [title, setTitle] = useState<string>('로그인');

	const { values, onChangeHandler } = useInput({
		initialValue: { email: '', password: '', isEmailValid: false, isPasswordValid: false },
	});

	const navigate = useNavigate();

	const onSubmitForm = () => {
		if (title === '회원가입') {
			callAPI('auth/signup', { email: values.email, password: values.password }).then(
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
			callAPI('auth/signin', { email: values.email, password: values.password }).then(
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

	useEffect(() => {
		if (getAccessToken()) {
			navigate('/todo');
		}
	}, [navigate]);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<p className={styles.title}>{title}</p>

				<form
					className={styles.form}
					onSubmit={(e: React.FormEvent) => {
						e.preventDefault();
						onSubmitForm();
					}}
				>
					<p>
						<input
							type="text"
							name="email"
							value={values.email}
							placeholder="email"
							onChange={onChangeHandler}
						/>
					</p>

					<p>
						<input
							type="password"
							name="password"
							value={values.password}
							placeholder="password"
							onChange={onChangeHandler}
						/>
					</p>

					<button
						className={
							values.isEmailValid && values.isPasswordValid ? styles.activate : styles.disabled
						}
					>
						{title}
					</button>
				</form>

				{title === '로그인' && (
					<p className={styles.signup} onClick={() => setTitle('회원가입')}>
						회원가입 하러가기
					</p>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
