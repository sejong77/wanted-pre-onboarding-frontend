import { createContext } from 'react';

const ModalContext = createContext({
	isEditModal: false,
	setEditModalHandler: (isOpen: boolean) => {},
});

export default ModalContext;
