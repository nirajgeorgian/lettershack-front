import React, { Component } from 'react'
import BookDetailsComponent from './book.details.component'
import {JssProvider} from 'react-jss'


class BookDetails extends Component {
  render() {
    return (
    <JssProvider classNamePrefix="BookDetails">
      <BookDetailsComponent/>
      </JssProvider>
    );
  }
} 

export default BookDetails;
  