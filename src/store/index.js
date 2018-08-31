import { createStore, applyMiddleware, compose} from 'redux'
import logger from 'redux-logger'
import ReduxThunk from 'redux-thunk'
import rootReducer from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(
		ReduxThunk,
		logger
	))
)

export default store
