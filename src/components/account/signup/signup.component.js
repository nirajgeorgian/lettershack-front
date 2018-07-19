import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import {
	Form, FormGroup, Label, Input, FormText, Col, Button, FormFeedback
} from 'reactstrap'
import { signupErrorD } from '../../../actions/actionCreator/signup.action'

class Signup extends Component {
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
		const result = await this.props.signupErrorD(this.state)
		if(result) {
			this.props.history.push("/")
		} else {
			this.setState({
				errorMessage: 'User alredy exists'
			})
		}
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
							invalid = { this.state.errorMessage === '' ? false : true }
						/>
						<FormFeedback>Oh noes! that email is already taken</FormFeedback>
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
	state
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ signupErrorD }, dispatch)
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))
