import * as T from './style';

import { useContext, useState } from 'react';
import { Transition } from 'react-transition-group';

import { TodoListProps } from '@interfaces/interface';
import { callDeleteAPI, callPutAPI } from '@api/api';
import TodoEdit from '../TodoEdit/TodoEdit';
import ModalContext from '@contexts/Modal/ModalContext';

const TodoItem = ({ todo }: { todo: TodoListProps }) => {
	const [item, setItem] = useState<number>(0);
	const [editTodo, setEditTodo] = useState<TodoListProps>({
		id: 0,
		todo: '',
		isCompleted: false,
	});
	const { isEditModal, setEditModalHandler } = useContext(ModalContext);

	const updateTodos = (id: number, todo: string, isCompleted: boolean) => {
		callPutAPI(`todos/${id}`, { todo, isCompleted });
	};

	const deleteTodos = (id: number) => {
		callDeleteAPI(`todos/${id}`);
	};

	return (
		<T.Item key={todo.id} onMouseEnter={() => setItem(todo.id)} onMouseLeave={() => setItem(0)}>
			<Transition unmountOnExit in={isEditModal} timeout={500}>
				{(state) => <TodoEdit show={state} todo={editTodo} update={updateTodos} />}
			</Transition>

			<T.ItemCenter>
				{todo.isCompleted ? (
					<T.CheckBox
						onClick={() => {
							updateTodos(todo.id, todo.todo, false);
						}}
					/>
				) : (
					<T.CheckBoxOutline
						onClick={() => {
							updateTodos(todo.id, todo.todo, true);
						}}
					/>
				)}
				<T.TodoName todo={todo.todo} isCompleted={todo.isCompleted}>
					{todo.todo}
				</T.TodoName>
			</T.ItemCenter>

			<T.ItemCenter>
				{item === todo.id && (
					<>
						<T.Edit
							onClick={() => {
								setEditTodo(todo);
								setEditModalHandler(true);
							}}
						/>
						<T.DeleteRounded onClick={() => deleteTodos(todo.id)} />
					</>
				)}
			</T.ItemCenter>
		</T.Item>
	);
};

export default TodoItem;
