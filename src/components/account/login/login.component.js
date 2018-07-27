import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {
	Form, FormGroup, Label, Input, Col, Button, Row, Container
} from 'reactstrap'
import { loginUserDispatcher } from '../../../actions/actionCreator/login.action'
import Auth from '../auth/auth.component'
import './login.css'

class Login extends Component {
	state = {
		email: '',
		password: '',
		errorMessage: '',
		redirect: ''
	}

	componentWillMount() {
		console.log(this.props.location.state.from.pathname);
		if(this.props.location.state) {
			this.setState({
				redirect: this.props.location.state.from.pathname
			})
		}
	}

	onInputChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

	onFormSubmit = async event => {
		event.preventDefault()
		await this.props.loginUserDispatcher(this.state)
		if(this.state.redirect !== '') {
			return this.props.history.push(this.state.redirect)
		}
	}

	render() {
		return (
			<Container>
				<Form onSubmit = { this.onFormSubmit } className="login-form">
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
					</FormGroup>
					<FormGroup>
						<Col sm={{ size: 9, offset: 3}}>
							<Button outline color='primary' type="submit">Login</Button>{''}
						</Col>
					</FormGroup>
				</Form>
				<hr></hr>
				<Row>
					<Col sm={{ size: 9, offset: 3 }}>
						<Auth />
					</Col>
				</Row>
			</Container>
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
