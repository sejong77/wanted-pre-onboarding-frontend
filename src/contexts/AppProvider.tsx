import { AppProviderProps } from '@interfaces/interface';

const AppProvider = ({ contexts, children }: AppProviderProps) => {
	return (
		<>
			{contexts.reduce((prev, Contexts) => {
				return <Contexts>{prev}</Contexts>;
			}, children)}
		</>
	);
};

export default AppProvider;
