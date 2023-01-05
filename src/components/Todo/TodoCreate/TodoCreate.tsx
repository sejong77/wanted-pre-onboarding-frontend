import * as T from './style';

import { useContext, useRef, useState } from 'react';

import { callPostAPI } from '@api/api';
import { dispatchContext } from '@contexts/Todo/TodoContext';
import { useEffect } from 'react';

const TodoCreate = () => {
	const [toggle, setToggle] = useState<string>('');
	const [content, setContent] = useState<string>('');

	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useContext(dispatchContext);

	const onToggle = () => {
		setToggle((prev) => (prev === '' ? 'open' : ''));
		setContent('');
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			inputRef.current.value = '';
			createTodos();
		}
	};

	const createTodos = () => {
		callPostAPI('/todos', { todo: content }).then((res) => {
			dispatch({ type: 'ADD', todo: res.data });
		});
	};

	useEffect(() => {
		if (toggle) {
			inputRef.current.focus();
		}
	}, [toggle]);

	return (
		<>
			{toggle && (
				<T.InputWrapper>
					<T.Input
						ref={inputRef}
						placeholder="할 일을 입력 후, Enter를 누르세요."
						value={content}
						onChange={(e) => setContent(e.target.value)}
						onKeyDown={onKeyDown}
					/>
				</T.InputWrapper>
			)}

			<T.BtnWrapper>
				<T.Button toggle={toggle} onClick={onToggle} />
			</T.BtnWrapper>
		</>
	);
};

export default TodoCreate;
