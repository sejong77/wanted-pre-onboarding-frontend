import * as T from '@pages/Todo/TodoStyle';

import { useContext } from 'react';
import { Transition } from 'react-transition-group';

import TodoHeader from '@components/Todo/TodoHeader/TodoHeader';
import TodoList from '@components/Todo/TodoList/TodoList';
import TodoEdit from '@components/Todo/TodoEdit/TodoEdit';
import TodoCreate from '@components/Todo/TodoCreate/TodoCreate';

import { TodoContextWrapper } from '@contexts/Todo/TodoContext';
import { TodoItemContext } from '@contexts/Todo/TodoItemContext';
import ModalContext from '@contexts/Modal/ModalContext';

const TodoPage = () => {
	const { item } = useContext(TodoItemContext);
	const { isEditModal } = useContext(ModalContext);

	return (
		<TodoContextWrapper>
			<T.TodoContainer>
				<T.TodoWrapper>
					<Transition unmountOnExit in={isEditModal} timeout={500}>
						{(state) => <TodoEdit show={state} todo={item} />}
					</Transition>

					<T.TodoContent>
						<TodoHeader />
						<TodoList />
					</T.TodoContent>

					<TodoCreate />
				</T.TodoWrapper>
			</T.TodoContainer>
		</TodoContextWrapper>
	);
};

export default TodoPage;
