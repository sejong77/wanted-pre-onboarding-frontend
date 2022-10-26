import styles from './AuthPage.module.scss';

import React, { useState } from 'react';

const AuthPage = () => {
	const [title, setTitle] = useState<string>('로그인');

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
						<input type="text" name="email" placeholder="email" />
					</p>

					<p>
						<input type="password" name="pwd" placeholder="password" />
					</p>

					<button className={styles.activate}>{title}</button>
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
