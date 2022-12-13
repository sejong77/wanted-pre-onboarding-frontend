import styles from './TodoEdit.module.scss';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

import { useContext, useState } from 'react';

import ModalContext from '../../contexts/Modal/ModalContext';
import { TodoListProps } from '../../interfaces/interface';

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
			<div className={styles.backdrop}></div>

			<div
				className={`${styles.container} ${
					show === 'entering' ? styles.open : show === 'exiting' ? styles.close : null
				}`}
			>
				<p className={styles.title}>수정하기</p>

				<div className={styles.wrapper}>
					<input
						type="text"
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value);
						}}
					/>

					<div className={styles.checkbox__area}>
						{isCompleted ? (
							<CheckBoxIcon
								className={styles.icon}
								onClick={() => {
									setIsCompleted(false);
								}}
							/>
						) : (
							<CheckBoxOutlineBlankIcon
								className={styles.icon}
								onClick={() => {
									setIsCompleted(true);
								}}
							/>
						)}
						완료 여부
					</div>

					<div className={styles.btn__area}>
						<span
							className={styles.edit}
							onClick={() => {
								update(todo.id, inputValue, isCompleted);
								setEditModalHandler(false);
							}}
						>
							수정
						</span>

						<span className={styles.cancel} onClick={() => setEditModalHandler(false)}>
							취소
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default TodoEdit;
