import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container , Row, Col} from 'reactstrap'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import options from './../../../config/options'
import { socialLoginDispatcher } from '../../../actions/actionCreator/accounts/login.action'
import { styles } from './auth.style'
import consts from '../../../config/const'

class Auth extends Component {
	state = {
		redirect: ''
	}
	componentWillMount() {
		if(this.props.redirect) {
			this.setState({
				redirect: this.props.redirect
			})
		}
	}
	authResponse = async (response, url) => {
		
		const token = response.accessToken
		const data = await axios(`${consts.API_URL}/${url}`, options('POST', { access_token: token }))
		console.log(data);
		await this.props.socialLoginDispatcher(data, url)
		if(this.state.redirect !== '') {
			return this.props.history.push(this.state.redirect)
		} else {
			return this.props.history.push('/')
		}
	}
	render() {
		const { classes } = this.props
		return (
			<Grid container spacing={16}>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<FacebookLogin
						appId="517391568694969"
						autoLoad={false}
						callback={res => this.authResponse(res, 'auth/facebook')}
						render = { renderProps => (
							<Button onClick={renderProps.onClick} variant="contained" color="primary">Login with facebook</Button>
						)}
					/>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={6}>
					<GoogleLogin
						className={ classes.googlelogin }
						clientId="931728103562-kivlmr53i8ckklnb9lj2nrtthv38qk9a.apps.googleusercontent.com"
						buttonText="Login with google"
						onSuccess={res => this.authResponse(res, 'auth/google')}
						onFailure={this.googleResponse}
					/>
				</Grid>
			</Grid>
		)
	}
}

const mapDispathToProps = dispatch => {
	return bindActionCreators({ socialLoginDispatcher }, dispatch)
}

export default withRouter(connect(null, mapDispathToProps)(withStyles(styles)(Auth)))
