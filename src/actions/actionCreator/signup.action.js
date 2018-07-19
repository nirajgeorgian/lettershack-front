import { SIGNUP_ERROR, SIGNUP_SUCCESS } from '../actionTypes/signup.actionType'

// payload is boolean
export const signupError = payload => ({
	type: SIGNUP_ERROR,
	payload
})

export const signupSuccess = payload => ({
	type: SIGNUP_SUCCESS,
	payload
})

const signupRequest = (body) => {
	const options = {
		method: 'POST',
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body, null, 2),
		'catche': 'default'
	}
	return fetch('/signup', options)
		.then(res => res)
		.catch(err => console.log(err))
}

export const signupErrorD = (body) => {
	return async dispatch => {
		const result = await signupRequest(body)
		if(result.status === 401) {
			dispatch(signupError(false))
			return false
		} else {
			const user = await result.json()
			console.log(user)
			dispatch(signupSuccess(true))
			return true
		}
	}
}
