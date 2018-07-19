import {
	LOGIN_LOAD, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT
} from '..//actionTypes/login.actionType'

export const loginLoad = () => ({
	type: LOGIN_LOAD
})

export const loginError = (payload) => ({
	type: LOGIN_ERROR,
	payload: true
})

export const loginSuccess = payload => ({
	type: LOGIN_SUCCESS,
	payload
})

export const logOut = () => ({
	type: LOG_OUT
})
