import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { StyledEngineProvider } from '@mui/material';

import App from './App';
import './fonts/Font.scss';

import ModalProvider from '@contexts/Modal/ModalProvider';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StyledEngineProvider injectFirst>
		<ModalProvider>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</ModalProvider>
	</StyledEngineProvider>
);
