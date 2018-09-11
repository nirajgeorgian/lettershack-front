import React from 'react'
import { hydrate } from 'react-dom'
import  ReactDOM from 'react-dom'
import Loadable from 'react-loadable'
import{ BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/index'
import './index.css';
import App from './App';
import LoadingPage from './components/LoadingPage'
import { setStartBooks } from './actions/actionCreator/books/books.action';
import { setStartUsers } from './actions/actionCreator/users/setUsers';
import '../node_modules/draft-js/dist/Draft.css'

import TextEditor from './containers/Editor/Editor'
// import registerServiceWorker from './registerServiceWorker'

const jsx =(
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
);

ReactDOM.render(<LoadingPage/>,document.getElementById('root'));


let hasRendered = false;
const renderApp = () =>{
  if(!hasRendered){
    jsx();
    hasRendered = true; 
  }
};

	

store.dispatch(setStartBooks())
.then(()=>{
store.dispatch(setStartUsers())
})
.then(()=>{
	renderApp();	  
 });

 
