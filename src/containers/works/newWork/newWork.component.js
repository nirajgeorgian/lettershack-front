import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import NewWork from './newWork';
import options from '../../../config/options'
import { createBookDispatcher } from '../../../actions/actionCreator/books/books.action'

class NewWorkPage extends Component {
		state = {
				title: '',
				description: ''
		}

		onStateChange = (state) => {
			const newState = { ...state }
			this.setState(newState)
		}

		onFormSubmit = async event => {
	    // event.preventDefault()
			const tagList = []
			// for(let i of this.state.tags.split(",")) {
			// 	tagList.push(i.trim())
			// }
			// this.setState({
			// 	tagList
			// })
			await this.props.createBookDispatcher(this.state)
			this.props.history.push('/books')
	  }

    render(){
				return(
        		<NewWork
							onFormSubmit={this.onFormSubmit}
							onStateChange={this.onStateChange}
						/>
    		)
		}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ createBookDispatcher }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(NewWorkPage));
