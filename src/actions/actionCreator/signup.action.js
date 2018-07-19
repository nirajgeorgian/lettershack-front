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
		body: JSON.stringify(creds, null, 2),
		'catche': 'default'
	}
	return dispatch => {
		dispatch(signupLoad(creds))
		return fetch('/signup', options)
			.then(res =>
				res.json()
					.then(user => ({ user, res }))
			)
			.then(({ user, res}) => {
				if(!res.ok) {
					dispatch(signupError(user.message))
					return Promise.reject(user)
				} else {
					dispatch(signupSuccess(user))
					return Promise.resolve(user)
				}
			}).catch(err => console.log(err))
	}
}
