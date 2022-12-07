import styles from './TodoPage.module.scss';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

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
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Todo List</div>

				<ul className={styles.list}>
					{todos.map((todo) => (
						<li key={todo.id} className={styles.item}>
							{todo.isCompleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}

							<span>{todo.todo}</span>
						</li>
					))}
				</ul>

				<div className={styles.create}>
					<AddCircleRoundedIcon sx={{ fontSize: 70 }} />
				</div>
			</div>
		</div>
	);
};

export default TodoPage;
