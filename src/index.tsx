import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/material';

import App from './App';
import './fonts/Font.css';

import ModalProvider from '@contexts/Modal/ModalProvider';
import AppProvider from '@contexts/AppProvider';
import { TodoItemProvider } from '@contexts/Todo/TodoItemContext';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StyledEngineProvider injectFirst>
		<AppProvider contexts={[TodoItemProvider, ModalProvider]}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</AppProvider>
	</StyledEngineProvider>
);
