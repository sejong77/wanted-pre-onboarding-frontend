import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.module.scss';
import './fonts/Font.scss';

import AuthPage from './pages/Auth/AuthPage';
import TodoPage from './pages/Todo/TodoPage';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<AuthPage />} />
				<Route path="/todo" element={<TodoPage />} />
			</Routes>
		</Router>
	);
};

export default App;
