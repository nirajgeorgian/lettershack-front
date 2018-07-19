import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import Login from './login/login.component'
import Signup from './signup/signup.component'

class Account extends Component {
	componentDidMount() {
		// console.log(this.props);
	}
	render() {
		return (
			<Container>
				{
					this.props.location.pathname === '/account/login' &&
					<Login />
				}
				{
					this.props.location.pathname === '/account/signup' &&
					<Signup />
				}
				{/*
				<Row id="parts">
					<Col id="login" xs="6">
						<Link to='/account/signup'>
							<Button outline color='primary'>Login</Button>{''}
						</Link>
					</Col>
					<Col id="signup" xs="6">
						<Link to='/account/signup'>
							<Button outline color='primary'>Signup</Button>{''}
						</Link>
					</Col>
				</Row>
				*/}
			</Container>
		)
	}
}

export default withRouter(Account)
