import axios from 'axios'
import {
	LOGIN_LOAD, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT
} from '..//actionTypes/login.actionType'
const localStorage = require('web-storage')().localStorage

export const loginLoad = creds => ({
	type: LOGIN_LOAD,
	isFetching: true,
	isAuthenticated: false,
	creds
})

export const loginError = message => ({
	type: LOGIN_ERROR,
	isFetching: false,
	isAuthenticated: false,
	message
})

export const loginSuccess = user => ({
	type: LOGIN_SUCCESS,
	isFetching: false,
	isAuthenticated: true,
	id_token: user.token
})

export const logOut = () => ({
	type: LOG_OUT
})

export const loginUserDispatcher = creds => {
	const options = {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		data: creds,
		'catche': 'default'
	}
	return dispatch => {
		dispatch(loginLoad(creds))
		return axios('https://lettershack-api.herokuapp.com/login', options)
			.then(res => {
					console.log(res);
				if(!res.status === 200) {
					dispatch(loginError(res.data.message))
					return Promise.reject(res.data)
				} else {
					localStorage.set('x-auth-key', res.data.token)
					dispatch(loginSuccess(res.data))
				}
			}).catch(err => dispatch(loginError(err.message)))
	}
}
