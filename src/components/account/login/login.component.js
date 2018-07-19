import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {
	Form, FormGroup, Label, Input, FormText, Col, Button
} from 'reactstrap'

class Login extends Component {
	componentWillMount() {
		console.log(this.props);
	}
	render() {
		return (
			<Form>
				<FormGroup row>
					<Label for='email' sm={3}>Email</Label>
					<Col sm={9}>
						<Input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your valid email...'
							value
						/>
					</Col>
				</FormGroup>
				<FormGroup row>
					<Label for='password' sm={3}>Password</Label>
					<Col sm={9}>
						<Input type='password' name='password' id='password' placeholder='Enter your password...' />
					</Col>
				</FormGroup>
			</Form>
		)
	}
}

export default withRouter(Login)
