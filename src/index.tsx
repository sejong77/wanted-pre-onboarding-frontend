import ReactDOM from 'react-dom/client';

import App from './App';
import './fonts/Font.scss';

import ModalProvider from '@contexts/Modal/ModalProvider';
import GlobalStyle from '@styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ModalProvider>
		<GlobalStyle />
		<App />
	</ModalProvider>
);
