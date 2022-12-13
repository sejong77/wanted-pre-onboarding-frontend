import styles from './TodoEdit.module.scss';

import { useContext } from 'react';

import ModalContext from '../../contexts/Modal/ModalContext';
import { TodoListProps } from '../../interfaces/interface';

const TodoEdit = ({ todo, show }: { todo: TodoListProps; show: string }) => {
	const { setEditModalHandler } = useContext(ModalContext);

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
					<input type="text" value={todo.todo} />

					<div className={styles.btn__area}>
						<span className={styles.edit}>수정</span>

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
