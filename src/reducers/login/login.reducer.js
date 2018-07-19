import {
	LOGIN_LOAD, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT
} from '../../actions/actionTypes/login.actionType'

const initialLoggedIn = {
	loggedIn: false,
	token: null
}

const loginReducer = (state = initialLoggedIn, action) => {
	switch (action.type) {
		case LOGIN_ERROR:
			return Object.assign({}, state, {
				loggedIn: action.payload
			})
		case LOGIN_SUCCESS:
			return Object.assign({}, state, {
				loggedIn: action.payload,
				token: action.payload
			})
		case LOG_OUT:
			return {
				...state
			}
		default:
			return state
	}
}

export default loginReducer
