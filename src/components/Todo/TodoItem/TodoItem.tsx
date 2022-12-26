import * as T from './style';

import { useState } from 'react';

import { TodoListProps } from '@interfaces/interface';
import { callPutAPI } from '@api/api';

const TodoItem = ({ todo }: { todo: TodoListProps }) => {
	const [item, setItem] = useState<number>(0);

	const updateTodos = (id: number, todo: string, isCompleted: boolean) => {
		callPutAPI(`todos/${id}`, { todo, isCompleted });
	};

	return (
		<T.Item key={todo.id} onMouseEnter={() => setItem(todo.id)} onMouseLeave={() => setItem(0)}>
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
						<T.Edit />
						<T.DeleteRounded />
					</>
				)}
			</T.ItemCenter>
		</T.Item>
	);
};

export default TodoItem;
