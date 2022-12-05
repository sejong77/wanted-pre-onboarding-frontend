import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.module.scss';
import './fonts/Font.scss';

import AuthPage from './pages/Auth/AuthPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthPage />} />
			</Routes>
		</Router>
	);
};

export default App;
