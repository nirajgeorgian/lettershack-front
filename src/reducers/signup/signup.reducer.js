import { SIGNUP_ERROR, SIGNUP_SUCCESS } from '../../actions/actionTypes/signup.actionType'

const signupReducer = (state = false, action) => {
	switch (action.type) {
		case SIGNUP_ERROR:
			return false
		case SIGNUP_SUCCESS:
			return true
		default:
			return state
	}
}

export default signupReducer
