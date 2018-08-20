import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { LOGIN_SUCCESS } from '../../../actions/actionTypes/login.actionType'
import { loginUserDispatcher } from '../../../actions/actionCreator/accounts/login.action'
import Auth from '../auth/auth.component'
import { styles } from './login.style'

class Login extends Component {
	state = {
		email: '',
		password: '',
		username: '',
		errorMessage: '',
		redirect: ''
	}

	componentWillMount() {
		if(this.props.state.login.isAuthenticated) {
			return this.props.history.push('/')
		}
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

	validate = () => {
		return this.state.email &&
					 // this.state.username &&
					 this.state.password
	}

	onFormSubmit = async event => {
		event.preventDefault()
		const res = await this.props.loginUserDispatcher(this.state)
		if(res.type === LOGIN_SUCCESS) {
			if(this.state.redirect !== '') {
				return this.props.history.push(this.state.redirect)
			} else {
				return this.props.history.push('/')
			}
		} else {
			this.setState({
				errorMessage: res.message
			})
		}
	}

	render() {
		const { classes } = this.props
		return (
			<div className={classes.pageLayout}>
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
									disabled={!this.validate()}
									variant="contained"
									color="primary"
									onClick={this.onFormSubmit}
								>Login</Button>
							</FormControl>
						</Grid>
						<hr />
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<Auth redirect={this.state.redirect} />
						</Grid>
					</Grid>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	state
})

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ loginUserDispatcher }, dispatch)
}
// export default withStyles(styles)(Login)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login)))
