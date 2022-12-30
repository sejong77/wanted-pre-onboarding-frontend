import React, { createContext, useReducer } from 'react';
import todoReducer, { actionType } from '@reducers/useTodoReducer';

import { TodoListProps } from '@interfaces/interface';

export const dispatchContext = createContext<React.Dispatch<actionType>>(null);
export const todoContext = createContext<TodoListProps[]>([]);

const initTodos: TodoListProps[] = [];

export const TodoContextWrapper = ({ children }: { children: React.ReactNode }) => {
	const [todos, dispatch] = useReducer(todoReducer, initTodos);

	return (
		<todoContext.Provider value={todos}>
			<dispatchContext.Provider value={dispatch}>{children}</dispatchContext.Provider>
		</todoContext.Provider>
	);
};
