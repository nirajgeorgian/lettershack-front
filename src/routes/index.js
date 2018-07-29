import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import PrivateRoute from './protectedRoutes/protected.routes'

// Import Component for render
// import Account from '../components/account/index'
import Profile from '../components/profile/profile.component'
import Notes from '../components/books/index'
// import Books from '../components/books/index'

const AsyncAccountComponent = Loadable({
	loader: () => import(/* webpackChunkName: "lettershack" */ '../components/account/index'),
	loading: () => <div>Loading... Accounts</div>,
	modules: ['lettershack']
})

const AsyncBookComponent = Loadable({
	loader: () => import(/* webpackChunkName: "lettershack" */ '../components/books/index'),
	loading: () => <div>Loading... Books</div>,
	modules: ['lettershack']
})

const AsyncNoteComponent = Loadable({
	loader: () => import(/* webpackChunkName: "lettershack" */ '../components/notes/index'),
	loading: () => <div>Loading... Notes</div>,
	modules: ['lettershack']
})

const ErrorPage = props => (
	<div>
		Error page
	</div>
)

class Routes extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' />
				{/* <Route exact path='/account' component={Account} /> */}
				<Route exact path='/account/login' component={AsyncAccountComponent} />
				<Route exact path='/account/signup' component={AsyncAccountComponent} />
				<PrivateRoute exact path='/books/create' component={AsyncBookComponent} />
				<PrivateRoute exact path="/book/:id" component={AsyncBookComponent} />
				<PrivateRoute exact path='/notes/create' component={AsyncNoteComponent} />
				<PrivateRoute exact path='/account/profile' component={Profile} />
				<Route path='*' component={ErrorPage} />
			</Switch>
		)
	}
}

// <Route exact path="" component={} />

export default Routes
