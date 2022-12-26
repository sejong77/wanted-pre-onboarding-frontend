import * as T from './style';

import { useNavigate } from 'react-router-dom';

import { removeToken } from '@lib/AuthLocalStorage';

const TodoHeader = () => {
	const navigate = useNavigate();

	const onLogout = () => {
		removeToken();
		navigate('/', { replace: true });
	};

	return (
		<T.Header>
			<T.Title>Todo List</T.Title>
			<T.Logout onClick={() => onLogout()}>로그아웃</T.Logout>
		</T.Header>
	);
};

export default TodoHeader;
