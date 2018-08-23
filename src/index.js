import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import{ BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'
import './index.css';
import App from './App';
import {JssProvider} from 'react-jss';
import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
// import registerServiceWorker from './registerServiceWorker'
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
window.onload = () => {
	Loadable.preloadReady().then(() => {
		hydrate(
			<Router>
				<Provider store = {store}>
				  <JssProvider  jss={jss} generateClassName={generateClassName}>
					<App />
				  </JssProvider>
				</Provider>
			</Router>,
			document.getElementById('root')
		)
	})
}

// registerServiceWorker();
 