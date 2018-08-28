import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { styles } from './style.layout'
import FormControl from '@material-ui/core/FormControl';
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
					 // this.state.proceed &&
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

	onLogin = () => {
		this.props.history.push("/account/login")
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.pageLayout}>
				<form onSubmit = { this.onFormSubmit } onFocus = { this.clearMessage }>
					<Grid container>
						<Grid container spacing={16}>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<FormControl fullWidth>
									<InputLabel htmlFor="email">Email address</InputLabel>
									<Input
										fullWidth
										type='email'
										name='email'
										id='email'
										placeholder='Enter your valid email...'
										value = { this.state.email }
										onChange = { this.onInputChange}
										onBlur = { this.onUsernameChange }
										valid = { this.state.userMessage === '' ? false : true }
										invalid = { this.state.userErrMessage === '' ? false : true }
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<FormControl fullWidth>
									<InputLabel htmlFor="username">Username</InputLabel>
									<Input
										fullWidth
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
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<FormControl fullWidth>
									<InputLabel htmlFor="password">Password</InputLabel>
									<Input
										fullWidth
										type='password'
										name='password'
										id='password'
										placeholder='Enter your password...'
										value = { this.state.password }
										onChange = { this.onInputChange}
									/>
								</FormControl>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<FormControl fullWidth>
									<Button
										fullWidth
										variant="contained"
										color="primary"
										disabled={!this.isValid()}
										onClick={this.onFormSubmit}
									>Signup</Button>
								</FormControl>
							</Grid>
							<hr />
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<center><h2>OR</h2></center>
								<Button
									fullWidth
									variant="contained"
									color="primary"
									onClick={this.onLogin}
								>Login</Button>
								{/* <Auth redirect={this.state.redirect} /> */}
							</Grid>
						</Grid>
					</Grid>
			</form>
			</div>
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


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Signup)))
