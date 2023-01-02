import { TodoListProps } from '@interfaces/interface';
import { createContext, useState } from 'react';

export const todoItemContext = createContext({
	item: {},
	setItemHandler: (data: TodoListProps) => {},
});

export const TodoItemProvider = ({ children }: { children: React.ReactNode }) => {
	const [item, setItem] = useState<TodoListProps>({});

	const setItemHandler = (data: TodoListProps) => {
		setItem(data);
	};

	return (
		<todoItemContext.Provider value={{ item, setItemHandler }}>{children}</todoItemContext.Provider>
	);
};
