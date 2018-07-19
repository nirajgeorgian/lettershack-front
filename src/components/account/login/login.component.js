import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {
	Form, FormGroup, Label, Input, FormText, Col, Button
} from 'reactstrap'
import { loginUserDispatcher } from '../../../actions/actionCreator/login.action'

class Login extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: ''
	}

	onInputChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	onFormSubmit = async event => {
		event.preventDefault()
		await this.props.loginUserDispatcher(this.state)
	}

	render() {
		return (
			<Form onSubmit = { this.onFormSubmit }>
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
						/>
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
					<Button outline color='primary' type="submit">Login</Button>{''}
				</FormGroup>
			</Form>
		)
	}
}

const mapStateToProps = state => ({
	state
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ loginUserDispatcher }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
