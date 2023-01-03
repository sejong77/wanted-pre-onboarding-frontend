import * as E from './style';

import { useContext, useState } from 'react';

import ModalContext from '@contexts/Modal/ModalContext';
import { dispatchContext } from '@contexts/Todo/TodoContext';

import { TodoListProps } from '@interfaces/interface';
import { callPutAPI } from '@api/api';

const TodoEdit = ({ todo, show }: { todo: TodoListProps; show: string }) => {
	const { setEditModalHandler } = useContext(ModalContext);
	const dispatch = useContext(dispatchContext);

	const [inputValue, setInputValue] = useState<string>(todo.todo);

	const handleUpdate = (data: TodoListProps, input: string) => {
		updateTodos(data.id, input, data.isCompleted);
		setEditModalHandler(false);
	};

	const updateTodos = (id: number, todo: string, isCompleted: boolean) => {
		callPutAPI(`todos/${id}`, { todo, isCompleted }).then((res) => {
			dispatch({ type: 'EDIT', todo: res.data });
		});
	};

	const onKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		todo: TodoListProps,
		input: string
	) => {
		if (e.key === 'Enter') {
			handleUpdate(todo, input);
		}
	};

	return (
		<>
			<E.BackDrop />

			<E.Container show={show}>
				<E.Title>수정하기</E.Title>

				<E.Wrapper>
					<E.Input
						type="text"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) => onKeyDown(e, todo, inputValue)}
					/>

					<E.BtnWrapper>
						<E.EditBtn
							onClick={() => {
								handleUpdate(todo, inputValue);
							}}
						>
							수정
						</E.EditBtn>

						<E.CancelBtn onClick={() => setEditModalHandler(false)}>취소</E.CancelBtn>
					</E.BtnWrapper>
				</E.Wrapper>
			</E.Container>
		</>
	);
};

export default TodoEdit;
