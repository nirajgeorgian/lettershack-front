import axios from 'axios'
import { SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_LOAD } from '../actionTypes/signup.actionType'
import consts from '../../config/const'

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
		return axios(`${consts.API_URL}/signup`, options)
			.then(res => {
				if(!res.data.status) {
					dispatch(signupError(res.data.message))
					return Promise.reject(res.data)
				} else {
					dispatch(signupSuccess(res.data))
					return Promise.resolve(res.data)
				}
			}).catch(err => dispatch(signupError(err)))
	}
}
