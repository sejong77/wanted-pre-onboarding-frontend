import React, { useState } from 'react';

import { InputProps } from '../interfaces/interface';

const useInput = ({ initialValue }: { initialValue: InputProps }) => {
	const [values, setValues] = useState(initialValue);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setValues((prevState) => {
			return { ...prevState, [name]: value };
		});
	};

	return { values, onChangeHandler };
};
