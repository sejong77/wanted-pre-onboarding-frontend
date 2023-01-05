export interface InputProps {
	email?: string;
	password?: string;
	isEmailValid?: boolean;
	isPasswordValid?: boolean;
}

export interface TodoListProps {
	id?: number;
	todo?: string;
	isCompleted?: boolean;
	userId?: number;
}

export interface AppProviderProps {
	contexts: Array<React.JSXElementConstructor<React.PropsWithChildren<any>>>;
	children: React.ReactNode;
}
