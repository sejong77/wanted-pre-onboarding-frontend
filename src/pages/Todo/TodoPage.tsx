import styles from './TodoPage.module.scss';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import { useEffect, useState } from 'react';

import { callGetAPI } from '../../api/api';
import { TodoListProps } from '../../interfaces/interface';

const TodoPage = () => {
	const [todos, setTodos] = useState<TodoListProps[]>([]);
	const [item, setItem] = useState<number>(0);
	const [toggle, setToggle] = useState<boolean>(false);

	const onToggle = () => {
		setToggle((prev) => !prev);
	};

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
						<li
							key={todo.id}
							className={styles.item}
							onMouseEnter={() => setItem(todo.id)}
							onMouseLeave={() => setItem(0)}
						>
							<div className={styles.center}>
								{todo.isCompleted ? (
									<CheckBoxIcon className={styles.icon} />
								) : (
									<CheckBoxOutlineBlankIcon className={styles.icon} />
								)}
								{todo.todo}
							</div>

							<div className={styles.center}>
								{item === todo.id && (
									<DeleteRoundedIcon className={`${styles.delete} ${styles.icon}`} />
								)}
							</div>
						</li>
					))}
				</ul>

				<div className={styles.btn__area}>
					<AddRoundedIcon
						sx={{ fontSize: 55 }}
						className={`${styles.createBtn} ${toggle && styles.toggle}`}
						onClick={() => onToggle()}
					/>
				</div>
			</div>
		</div>
	);
};

export default TodoPage;
