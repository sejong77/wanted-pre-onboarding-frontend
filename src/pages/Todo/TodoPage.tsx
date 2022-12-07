import styles from './TodoPage.module.scss';

import { useEffect, useState } from 'react';

import { callGetAPI } from '../../api/api';
import { TodoListProps } from '../../interfaces/interface';

const TodoPage = () => {
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
		<>
			<div className={styles.title}>Todo List</div>

			<ul className={styles.list}>
				{todos.map((todo) => (
					<li key={todo.id} className={styles.item}>
						{todo.todo}
					</li>
				))}
			</ul>
		</>
	);
};

export default TodoPage;
