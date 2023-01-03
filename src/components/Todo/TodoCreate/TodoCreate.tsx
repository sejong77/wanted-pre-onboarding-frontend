import * as T from './style';

import { useRef, useState } from 'react';

const TodoCreate = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const [content, setContent] = useState<string>('');

	const inputRef = useRef<HTMLInputElement>(null);

	const onToggle = () => {
		setToggle((prev) => !prev);
		setContent('');
	};

	return (
		<>
			{toggle && (
				<T.InputWrapper>
					<T.Input
						ref={inputRef}
						placeholder="할 일을 입력 후, Enter를 누르세요."
						value={content}
						onChange={(e) => setContent(e.target.value)}
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
