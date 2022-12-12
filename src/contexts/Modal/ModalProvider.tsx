import { useState } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isEditModal, setEditModal] = useState<boolean>(false);

	const setEditModalHandler = (isOpen: boolean) => {
		setEditModal(isOpen);
	};

	return (
		<ModalContext.Provider value={{ isEditModal, setEditModalHandler }}>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
