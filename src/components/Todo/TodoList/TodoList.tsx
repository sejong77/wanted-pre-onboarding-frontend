import * as T from './style';

import { useEffect, useState } from 'react';

import { callGetAPI } from '@api/api';
import TodoItem from '../TodoItem/TodoItem';
import { TodoListProps } from '@interfaces/interface';

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
				<TodoItem key={todo.id} todo={todo} />
			))}
		</T.List>
	);
};

export default TodoList;
