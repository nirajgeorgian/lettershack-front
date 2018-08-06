import {
	LOGOUT_REQUEST
} from '../../actionTypes/logout.actionType'
import { logOut } from './login.action'
const localStorage = require('web-storage')().localStorage

const requestLogout = () => ({
	type: LOGOUT_REQUEST,
	isFetching: true,
	isAuthenticated: true
})

export const logoutUserDispatcher = () => {
	return dispatch => {
		dispatch(requestLogout())
		localStorage.remove('x-auth-key')
		dispatch(logOut())
	}
}
