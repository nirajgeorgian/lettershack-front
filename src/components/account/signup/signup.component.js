import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {
	Form, FormGroup, Label, Input, Col, Button, FormFeedback
} from 'reactstrap'
import {
	CHECK_USERNAME_SUCCESS, CHECK_USERNAME_FAILURE, POST_USERNAME_FAILURE
} from '../../../actions/actionTypes/username.availability.actionType'
import { SIGNUP_ERROR } from '../../../actions/actionTypes/signup.actionType'
import { checkUsername, postUsername } from '../../../actions/actionCreator/accounts/username.availability.action'
import { signupUserDispatcher } from '../../../actions/actionCreator/accounts/signup.action'

class Signup extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		proceed: false,
		errorMessage: '',
		userMessage: '',
		userErrMessage: ''
	}

	componentWillMount() {
		if(this.props.login.isAuthenticated) {
			return this.props.history.push('/')
		}
	}

	isValid = () => {
		return this.state.email &&
					 this.state.password &&
					 this.state.proceed &&
					 this.state.username
	}

	onUsernameChange = async event => {
		if(this.state.username !== '') {
			const data = await this.props.checkUsername(this.state.username)
			if(data.type === CHECK_USERNAME_SUCCESS) {
				this.setState({
					userMessage: 'Username is available',
					proceed: true
				})
			} else {
				this.setState({
					userErrMessage: data.message,
					proceed: false
				})
			}
		}
	}

	onInputChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	onFormSubmit = async event => {
		event.preventDefault()
		const result = await this.props.signupUserDispatcher(this.state)
		const username = await this.props.postUsername(this.state)
		if(result.type !== SIGNUP_ERROR && result.type !== POST_USERNAME_FAILURE) {
			this.props.history.push("/account/login")
		} else {
			this.setState({
				errorMessage: result.message
			})
		}
	}

	clearMessage = () => {
		this.setState({
			errorMessage: '',
			userErrMessage: '',
			userMessage: ''
		})
	}

	render() {
		return (
			<Form onSubmit = { this.onFormSubmit } onFocus = { this.clearMessage }>
				<FormGroup row>
					<Label for='username' sm={3}>Username</Label>
					<Col sm={9}>
						<Input
							type='text'
							name='username'
							id='username'
							placeholder='Enter one username...'
							value = { this.state.username }
							onChange = { this.onInputChange }
							onBlur = { this.onUsernameChange }
							valid = { this.state.userMessage === '' ? false : true }
							invalid = { this.state.userErrMessage === '' ? false : true }
						/>
					<FormFeedback valid>{ this.state.userMessage }</FormFeedback>
					<FormFeedback>{ this.state.userErrMessage }</FormFeedback>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for='email' sm={3}>Email</Label>
					<Col sm={9}>
						<Input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your valid email...'
							value = { this.state.email }
							onChange = { this.onInputChange}
							invalid = { this.state.errorMessage === '' ? false : true }
						/>
						<FormFeedback>Oh noes! { this.state.errorMessage }</FormFeedback>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for='password' sm={3}>Password</Label>
					<Col sm={9}>
						<Input
							type='password'
							name='password'
							id='password'
							placeholder='Enter your password...'
							value = { this.state.password }
							onChange = { this.onInputChange}
						/>
					</Col>
					<Button outline color='primary' type="submit" disabled={!this.isValid()}>Signup</Button>{''}
				</FormGroup>
			</Form>
		)
	}
}

const mapStateToProps = state => ({
	signup: state.signup,
	login: state.login
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ signupUserDispatcher, checkUsername, postUsername }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))
