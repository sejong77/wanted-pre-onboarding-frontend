import * as T from './style';

import { useContext, useState } from 'react';

import { TodoListProps } from '@interfaces/interface';
import { callDeleteAPI, callPutAPI } from '@api/api';

import ModalContext from '@contexts/Modal/ModalContext';
import { dispatchContext } from '@contexts/Todo/TodoContext';
import { TodoItemContext } from '@contexts/Todo/TodoItemContext';

const TodoItem = ({ todo }: { todo: TodoListProps }) => {
	const [item, setItem] = useState<number>(0);

	const dispatch = useContext(dispatchContext);
	const { setEditModalHandler } = useContext(ModalContext);
	const { setItemHandler } = useContext(TodoItemContext);

	const updateTodos = (id: number, todo: string, isCompleted: boolean) => {
		callPutAPI(`todos/${id}`, { todo, isCompleted }).then((res) => {
			dispatch({ type: 'EDIT', todo: res.data });
		});
	};

	const handleUpdate = (data: TodoListProps) => {
		updateTodos(data.id, data.todo, data.isCompleted);
	};

	const deleteTodos = (id: number) => {
		callDeleteAPI(`todos/${id}`).then(() => {
			dispatch({ type: 'DELETE', id });
		});
	};

	const onCheckClick = () => {
		handleUpdate({ ...todo, isCompleted: !todo.isCompleted });
	};

	return (
		<T.Item onMouseEnter={() => setItem(todo.id)} onMouseLeave={() => setItem(0)}>
			<T.ItemCenter onClick={() => onCheckClick()}>
				{todo.isCompleted ? <T.CheckBox /> : <T.CheckBoxOutline />}
				<T.TodoName todo={todo.todo} isCompleted={todo.isCompleted}>
					{todo.todo}
				</T.TodoName>
			</T.ItemCenter>

			<T.ItemCenter>
				{item === todo.id && (
					<>
						<T.Edit
							onClick={() => {
								setItemHandler(todo);
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
