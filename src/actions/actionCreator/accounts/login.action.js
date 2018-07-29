import axios from 'axios'
import {
	LOGIN_LOAD, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT
} from '../../actionTypes/login.actionType'
import consts from '../../../config/const'
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
		return axios(`${consts.API_URL}/user/login`, options)
			.then(res => {
				if(!res.data.status) {
					dispatch(loginError(res.data.message))
					return Promise.reject(res.data)
				} else {
					localStorage.set('x-auth-key', res.data.token)
					dispatch(loginSuccess(res.data))
				}
			}).catch(err => dispatch(loginError(err.message)))
	}
}

export const socialLoginDispatcher = (response, url) => {
	let token;
	if(url.split('/').includes('facebook')) {
		token = response.data.user.facebookUserId.token
	} else {
		token = response.data.user.googleUserId.token
	}
	return dispatch => {
		if(response.data.status) {
			localStorage.set('x-auth-key', token)
			const user = { ...response.data.user, token: token }
			dispatch(loginSuccess(user))
		} else {
			dispatch(loginError("There's SOmething wrong!. Please try again"))
			return Promise.reject(response.data)
		}
	}
}
