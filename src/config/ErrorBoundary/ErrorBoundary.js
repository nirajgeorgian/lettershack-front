import React, { Component } from 'react'
import ErrorComponent from './ErrorComponent'

class ErrorBoundary extends Component {
	state = {
		hasError: false
	}

	// Catch errors in react V16 and let your UI show proper message instead of error boundary
	componentDidCatch(error, info) {
		this.setState({ hasError: true })
		console.error(error, info);
	}
	render() {
		return (
			<div>
				{
					this.state.hasError
					? <ErrorComponent />
					: this.props.children
				}
			</div>
		)
	}
}

export default ErrorBoundary
