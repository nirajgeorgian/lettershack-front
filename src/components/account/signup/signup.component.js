import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {
	Form, FormGroup, Label, Input, Col, Button, FormFeedback
} from 'reactstrap'
import { signupUserDispatcher } from '../../../actions/actionCreator/accounts/signup.action'

class Signup extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: ''
	}

	componentWillMount() {
		if(this.props.login.isAuthenticated) {
			return this.props.history.push('/')
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
		if(result.type !== 'SIGNUP_ERROR') {
			this.props.history.push("/account/login")
		} else {
			this.setState({
				errorMessage: result.message.message
			})
		}
	}

	clearMessage = () => {
		this.setState({
			errorMessage: ''
		})
	}

	render() {
		return (
			<Form onSubmit = { this.onFormSubmit } onFocus = { this.clearMessage }>
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
					<Button outline color='primary' type="submit">Signup</Button>{''}
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
	return bindActionCreators({ signupUserDispatcher }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))
