import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Component for render
import Account from '../components/account/index'

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' />
				<Route exact path='/account' component={Account} />
				<Route exact path='/account/login' component={Account} />
				<Route exact path='/account/signup' component={Account} />
			</Switch>
		)
	}
}

export default Routes
