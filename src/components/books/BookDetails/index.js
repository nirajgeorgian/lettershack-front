import React, { Component } from 'react'
import BookDetailsComponent from './book.details.component'


class BookDetails extends Component {
  constructor(props){
    super(props); 
}
  render() {
    return (
      <BookDetailsComponent {...this.props}/>
    );
  }
} 

export default BookDetails;
  