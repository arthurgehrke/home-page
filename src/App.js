import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';

import Home from './pages/home';

const App = () => {
	return (
		<BrowserRouter>
			<Home />

			<GlobalStyles />
		</BrowserRouter>
	);
};

export default App;
