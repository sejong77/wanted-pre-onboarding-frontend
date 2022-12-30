import * as T from './style';

import { useContext, useEffect, useCallback } from 'react';

import { dispatchContext, todoContext } from '@contexts/Todo/TodoContext';

import { callGetAPI } from '@api/api';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
	const todoData = useContext(todoContext);
	const dispatch = useContext(dispatchContext);

	const getTodos = useCallback(() => {
		callGetAPI('/todos').then((res) => {
			dispatch({ type: 'INIT', initTodos: res.data });
		});
	}, [dispatch]);

	useEffect(() => {
		getTodos();
	}, [getTodos]);

	return (
		<T.List>
			{todoData.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</T.List>
	);
};

export default TodoList;
