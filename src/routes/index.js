import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from './protectedRoutes/protected.routes'

// Import Component for render
import Account from '../components/account/index'
import Profile from '../components/profile/profile.component'

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' />
				<Route exact path='/account' component={Account} />
				<Route exact path='/account/login' component={Account} />
				<Route exact path='/account/signup' component={Account} />
				<PrivateRoute exact path='/account/profile' component={Profile} />
			</Switch>
		)
	}
}

export default Routes
