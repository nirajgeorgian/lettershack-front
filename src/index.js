import React from 'react'
import { hydrate, render } from 'react-dom'
import Loadable from 'react-loadable'
import{ BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store/index'
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker'

window.onload = () => {
	Loadable.preloadReady().then(() => {
		hydrate(
			<Router>
				<Provider store = {store}>
					<App />
				</Provider>
			</Router>,
			document.getElementById('root')
		)
	})
}

// registerServiceWorker();
