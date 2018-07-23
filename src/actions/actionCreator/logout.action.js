import {
	LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE
} from '../actionTypes/logout.actionType'
const localStorage = require('web-storage')().localStorage

const requestLogout = () => ({
	type: LOGOUT_REQUEST,
	isFetching: true,
	isAuthenticated: true
})

const receivedLogout = () => ({
	type: LOGOUT_SUCCESS,
	isFetching: false,
	isAuthenticated: false
})

export const logoutUserDispatcher = () => {
	return dispatch => {
		dispatch(requestLogout())
		localStorage.remove('x-auth-key')
		dispatch(receivedLogout())
	}
}
