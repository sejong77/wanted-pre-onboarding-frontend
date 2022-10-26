import styles from './AuthPage.module.scss';

import React, { useState } from 'react';
import useInput from '../../hooks/useInput';

const AuthPage = () => {
	const [title, setTitle] = useState<string>('로그인');

	const { values, onChangeHandler } = useInput({
		initialValue: { email: '', password: '', isEmailValid: false, isPasswordValid: false },
	});

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<p className={styles.title}>{title}</p>

				<form
					className={styles.form}
					onSubmit={(e: React.FormEvent) => {
						e.preventDefault();
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
