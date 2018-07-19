import {
	LOGIN_LOAD, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT
} from '../../actions/actionTypes/login.actionType'

const initialLoggedIn = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('x-auth-key') ? true : false
}

const loginReducer = (state = initialLoggedIn, action) => {
	switch (action.type) {
		case LOGIN_LOAD:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				user: action.creds
			})
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				isFetching: false,
				isAuthenticated: false,
				errorMessage: ''
			})
		case LOGIN_ERROR:
			return Object.assign({}, state, {
				isFetching: true,
				isAuthenticated: false,
				errorMessage: action.message
			})
		case LOG_OUT:
			return {
				...state,
				isFetching: true,
				isAuthenticated: false
			}
		default:
			return state
	}
}

export default loginReducer
