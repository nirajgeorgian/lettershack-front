import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const AccountRoute = ({ component: Component, ...rest }) => (
	<Route { ...rest } render = { props => {
		return (
			rest.isAuthenticated === false
			? <Component { ...props } />
			: <Redirect to = {
				{
					pathname: '/',
					state: { from: props.loction }
				}
			}
		/>
		)
	}}
)

export default AccountRoute
