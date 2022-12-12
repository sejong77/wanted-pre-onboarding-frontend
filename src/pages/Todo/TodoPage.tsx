import styles from './TodoPage.module.scss';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

import React, { useContext, useEffect, useRef, useState } from 'react';

import TodoEdit from '../../components/TodoEdit/TodoEdit';

import { callDeleteAPI, callGetAPI, callPostAPI } from '../../api/api';
import { TodoListProps } from '../../interfaces/interface';

import ModalContext from '../../contexts/Modal/ModalContext';

const TodoPage = () => {
	const [editTodo, setEditTodo] = useState<TodoListProps>({
		id: 0,
		todo: '',
		isCompleted: false,
	});
	const [todos, setTodos] = useState<TodoListProps[]>([]);
	const [item, setItem] = useState<number>(0);
	const [toggle, setToggle] = useState<boolean>(false);
	const [createContent, setCreateContent] = useState<string>('');

	const inputRef = useRef<HTMLInputElement>(null);

	const { isEditModal, setEditModalHandler } = useContext(ModalContext);

	const onToggle = () => {
		setToggle((prev) => !prev);
		setCreateContent('');
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			createTodos();
		}
	};

	const createTodos = () => {
		callPostAPI('/todos', { todo: createContent }).then((res) => {
			console.log('createTodos: ', res.data);
			getTodos();
		});
	};

	const deleteTodos = (id: number) => {
		callDeleteAPI(`/todos/${id}`).then(() => {
			getTodos();
		});
	};

	const getTodos = () => {
		callGetAPI('/todos').then((res) => {
			console.log('getTodos: ', res.data);
			setTodos(res.data);
		});
	};

	useEffect(() => {
		getTodos();

		if (toggle) {
			inputRef.current.focus();
		}
	}, [toggle]);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.title}>Todo List</div>
					{isEditModal && <TodoEdit todo={editTodo} />}

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
										<>
											<EditIcon
												className={`${styles.edit} ${styles.icon}`}
												onClick={() => {
													setEditTodo(todo);
													setEditModalHandler(true);
												}}
											/>

											<DeleteRoundedIcon
												className={`${styles.delete} ${styles.icon}`}
												onClick={() => {
													deleteTodos(todo.id);
												}}
											/>
										</>
									)}
								</div>
							</li>
						))}
					</ul>
				</div>

				{toggle && (
					<div className={styles.input}>
						<input
							ref={inputRef}
							type="text"
							placeholder="할 일을 입력 후, Enter를 누르세요."
							onKeyDown={onKeyDown}
							value={createContent}
							onChange={(e) => {
								setCreateContent(e.target.value);
							}}
						/>
					</div>
				)}

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
