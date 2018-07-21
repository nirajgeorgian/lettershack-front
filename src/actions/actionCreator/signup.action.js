import axios from 'axios'
import { SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_LOAD } from '../actionTypes/signup.actionType'

// payload is boolean
export const signupError = message => ({
	type: SIGNUP_ERROR,
	message,
	isFetching: false
})

export const signupSuccess = user => ({
	type: SIGNUP_SUCCESS,
	isFetching: false,
	user
})

export const signupLoad = creds => ({
	type: SIGNUP_LOAD,
	isFetching: true,
	creds
})

export const signupUserDispatcher = creds => {
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
		dispatch(signupLoad(creds))
		return axios('https://lettershack-api.herokuapp.com/signup', options)
			.then(res => {
				if(!res.status !== 200) {
					dispatch(signupError(res.data.message))
					return Promise.reject(res.data)
				} else {
					dispatch(signupSuccess(res.data))
					return Promise.resolve(res.data)
				}
			}).catch(err => dispatch(signupError(err.message)))
	}
}
