import * as T from './style';

import { useEffect, useState } from 'react';

import { callGetAPI } from '@api/api';
import { TodoListProps } from '@interfaces/interface';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = () => {
	const [todos, setTodos] = useState<TodoListProps[]>([]);

	const getTodos = () => {
		callGetAPI('/todos').then((res) => {
			console.log('getTodos: ', res.data);
			setTodos(res.data);
		});
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<T.List>
			{todos.map((todo) => (
				<TodoItem todo={todo} />
			))}
		</T.List>
	);
};

export default TodoList;
