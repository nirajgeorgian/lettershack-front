import { combineReducers } from 'redux'
import loginReduer from './login/login.reducer'
import signupReducer from './signup/signup.reducer'

const rootReducer = combineReducers({
	login: loginReduer,
	signup: signupReducer
})

export default rootReducer
