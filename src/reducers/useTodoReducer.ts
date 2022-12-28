import { TodoListProps } from '@interfaces/interface';

export type actionType = {
	type: string;
	todo?: TodoListProps;
	initTodos?: TodoListProps[];
};

const todoReducer = (state: TodoListProps[], action: actionType) => {
	switch (action.type) {
		case 'INIT':
			return [...action.initTodos];

		case 'ADD':
			return [...state, action.todo];

		case 'EDIT':
			return state.map((task) => (task.id === action.todo.id ? { ...action.todo } : task));

		case 'DELETE':
			return state.filter((task) => task.id === action.todo.id);
	}
};

export default todoReducer;
