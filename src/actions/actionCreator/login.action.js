import {
	LOGIN_LOAD, LOGIN_ERROR, LOGIN_SUCCESS, LOG_OUT
} from '..//actionTypes/login.actionType'

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
		body: JSON.stringify(creds, null, 2),
		'catche': 'default'
	}
	return dispatch => {
		dispatch(loginLoad(creds))
		return fetch('/login', options)
			.then(res =>
				res.json()
					.then(user => ({ user, res }))
			)
			.then(({ user, res }) => {
				if(!res.ok) {
					dispatch(loginError(user.message))
					return Promise.reject(user)
				} else {
					localStorage.setItem('x-auth-token', user.token)
					dispatch(loginSuccess(user))
				}
			}).catch(err => console.log("Error: ", err))
	}
}
