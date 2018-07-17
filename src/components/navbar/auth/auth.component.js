import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'

class Auth extends Component {
	facebookResponse = async response => {
		const token = response.accessToken
		console.log(token);
		const options = {
			method: 'POST',
			mode: 'cors',
			headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
			body: JSON.stringify({
				access_token: token
			}, null, 2),
			cache: 'default'
		}
		const data = await fetch('/auth/facebook', options)
		const result = await data.json()
		console.log(result)
	}
	googleResponse = response => {
		console.log(response)
	}
	render() {
		return (
			<div>
				<FacebookLogin
          appId="517391568694969"
          autoLoad={false}
          callback={this.facebookResponse}
				/>
        <GoogleLogin
          clientId="931728103562-kivlmr53i8ckklnb9lj2nrtthv38qk9a.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse}
        />
			</div>
		)
	}
}

export default Auth
