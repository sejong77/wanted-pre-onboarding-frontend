import ReactDOM from 'react-dom/client';

import App from './App';
import ModalProvider from './contexts/Modal/ModalProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ModalProvider>
		<App />
	</ModalProvider>
);
