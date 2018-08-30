import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const store = createStore(
	rootReducer,
	applyMiddleware(
		ReduxThunk,
		logger
	),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
