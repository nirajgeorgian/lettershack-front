import React from 'react'
import { render } from 'react-dom'
import{ BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'

render(
	<Router>
		<Provider store = {store}>
			<App />
		</Provider>
	</Router>,
	document.getElementById('root')
);
// registerServiceWorker();
