import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import NewWork from './newWork';
import options from '../../../config/options'
import { createBookDispatcher } from '../../../actions/actionCreator/books/books.action'

class NewWorkPage extends Component {
		onFormSubmit = async bookData => {
			const book = {
				title:bookData.title, 
				description:bookData.description,
				genre:bookData.genre
			}
			console.log(book);
			
			await this.props.createBookDispatcher(book)
			//this.props.history.push('/editor')
	  }

    render(){
				return(
        		<NewWork
							onFormSubmit={this.onFormSubmit}
				/>
    		)
		}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ createBookDispatcher }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(NewWorkPage));
