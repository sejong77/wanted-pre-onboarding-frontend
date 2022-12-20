import React, { useState } from 'react';

import { InputProps } from '@interfaces/interface';

const useInput = ({ initialValue }: { initialValue: InputProps }) => {
	const [values, setValues] = useState(initialValue);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setValues((prev) => {
			return {
				...prev,
				[name]: value,
				isEmailValid: name === 'email' ? value.includes('@') : prev.isEmailValid,
				isPasswordValid: name === 'password' ? value.trim().length > 7 : prev.isPasswordValid,
			};
		});
	};

	return { values, onChangeHandler };
};

export default useInput;
