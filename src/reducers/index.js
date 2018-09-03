import { combineReducers } from 'redux'
import loginReduer from './login/login.reducer'
import signupReducer from './signup/signup.reducer'
import booksReducer from './books/books.reducer'
import notesReducer from './notes/notes.controller'
import usersReducer from './users/users.reducer'
const rootReducer = combineReducers({
	login: loginReduer,
	signup: signupReducer,
	book: booksReducer,
	note: notesReducer,
	user: usersReducer
})

export default rootReducer
