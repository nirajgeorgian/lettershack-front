import {
	CHECK_USERNAME_FETCH,
	CHECK_USERNAME_SUCCESS,
	CHECK_USERNAME_FAILURE,
	POST_USERNAME_FAILURE,
	POST_USERNAME_SUCCESS
} from '../../actionTypes/username.availability.actionType'
import axios from 'axios'
import consts from '../../../config/const'
import options from '../../../config/options'

const checkUsernameFetch = username => ({
	type: CHECK_USERNAME_FETCH,
	username
})

const checkUsernameSuccess = result => ({
	type: CHECK_USERNAME_SUCCESS,
	result
})

const checkUsernameFailure = message => ({
	type: CHECK_USERNAME_FAILURE,
	result: false,
	message
})

const postUsernameFailure = message => ({
	type: POST_USERNAME_FAILURE,
	result: false,
	message
})

const postUsernameSuccess = result => ({
	type: POST_USERNAME_SUCCESS,
	result
})

export const checkUsername = username => {
	return dispatch => {
		// dispatch(checkUsername(username))
		if(username !== '') {
			return axios(`${consts.API_URL}/users/${username}`, options())
			.then(res => {
				if(!res.data.status) {
					return dispatch(checkUsernameSuccess(true))
				} else {
					return dispatch(checkUsernameFailure('sorry username is taken'))
				}
			})
			.catch(err => dispatch(checkUsernameFailure(err.message)))
		}
	}
}

export const postUsername = data => {
	return dispatch => {
		return axios(`${consts.API_URL}/users/username`, options('POST', data))
			.then(res => {
				if(res.data.status) {
					// username is set
					return dispatch(postUsernameSuccess(res.data))
				} else {
					return dispatch(postUsernameFailure(res.data.message))
				}
			})
			.catch(err => dispatch(postUsernameFailure('error setting username')))
	}
}
