import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'
let initialState = {
	login: {},
	signup: {}
}

const store = createStore(
	rootReducer,
	applyMiddleware(
		ReduxThunk,
		logger
	)
)

export default store
