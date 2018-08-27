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
import '../node_modules/draft-js/dist/Draft.css'

import TextEditor from './containers/Editor/Editor'
// import registerServiceWorker from './registerServiceWorker'

window.onload = () => {
	Loadable.preloadReady().then(() => {
		hydrate(
			<Router>
				<Provider store = {store}>
				  <JssProvider>
					<App />
				  </JssProvider>
				</Provider>
			</Router>,
			document.getElementById('root')
		)
	})
}

// registerServiceWorker();
