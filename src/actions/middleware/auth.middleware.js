const callApi = (endpoint, autheticated, method, body) => {
	let token = localStorage.getItem('x-auth-token') || null
	const options = {
		method: `${method}`,
		mode: 'cors',
		headers: {
			'Content-Type': 'application/json'
		},
		body: method === 'POST' ? JSON.stringify(creds, null, 2) : null,
		'catche': 'default'
	}
	if(autheticated) {
		if(token) {
			config.headers = { 'x-auth-key': `${token}` }
		} else {
				throw "No token saved!"
		}
	}
	return fetch(endpoint, config)
		.then(res =>
			res.json()
				.then(data => ({ res, data }))
		)
		.then(({ res, data}) => {
			if(!res.ok) {
				return Promise.reject(data)
			}
			return data
		})
		.catch(err => console.log(err))
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
	const callAPI = action[CALL_API]

	// Don't apply middleware to every single action
	if(typeof callAPI === 'undefined') {
		return next(action)
	}

	let { endpoint, types, authenticated, method, body } = callAPI
	const [ requestType, successType, errorType ] = types

	return callApi(endpoint, autheticated, method, body)
		.then(res => next({
			res,
			autheticated,
			type: successType
		}),
		error => next({
			error: error.message || "Therewas an error",
			type: errorTypes
		})
	)

}
