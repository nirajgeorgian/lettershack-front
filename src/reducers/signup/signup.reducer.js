import { SIGNUP_ERROR, SIGNUP_SUCCESS, SIGNUP_LOAD } from '../../actions/actionTypes/signup.actionType'

const initialState = {
	isFetching: false
}

const signupReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGNUP_LOAD:
			return {
				...state,
				user: action.creds,
			}
		case SIGNUP_SUCCESS:
			return {
				...state,
				isFetching: false,
				user: action.user
			}
		case SIGNUP_ERROR:
			return {
				...state,
				isFetching: false,
				message: action.message
			}
		default:
			return state
	}
}

export default signupReducer
