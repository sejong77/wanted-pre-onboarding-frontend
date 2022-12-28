import * as E from './style';
import * as T from '@components/Todo/TodoItem/style';

import { useContext, useState } from 'react';

import ModalContext from '@contexts/Modal/ModalContext';
import { TodoListProps } from '@interfaces/interface';

const TodoEdit = ({
	todo,
	show,
	update,
}: {
	todo: TodoListProps;
	show: string;
	update: (id: number, todo: string, isCompleted: boolean) => void;
}) => {
	const { setEditModalHandler } = useContext(ModalContext);
	const [inputValue, setInputValue] = useState<string>(todo.todo);
	const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

	return (
		<>
			<E.BackDrop />

			<E.Container show={show}>
				<E.Title>수정하기</E.Title>

				<E.Wrapper>
					<E.Input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

					<E.CheckBoxWrapper>
						{isCompleted ? (
							<T.CheckBox
								onClick={() => {
									setIsCompleted(false);
								}}
							/>
						) : (
							<T.CheckBoxOutline
								onClick={() => {
									setIsCompleted(true);
								}}
							/>
						)}
						완료 여부
					</E.CheckBoxWrapper>

					<E.BtnWrapper>
						<E.EditBtn
							onClick={() => {
								update(todo.id, inputValue, isCompleted);
								setEditModalHandler(false);
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
