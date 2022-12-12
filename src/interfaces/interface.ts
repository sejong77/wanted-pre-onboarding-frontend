export interface InputProps {
	email: string;
	password: string;
	isEmailValid: boolean;
	isPasswordValid: boolean;
}

export interface TodoListProps {
	id: number;
	todo: string;
	isCompleted: false;
	userId?: number;
}
