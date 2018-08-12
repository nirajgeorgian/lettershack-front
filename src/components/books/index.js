import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'reactstrap'

import BookDetails from './BookDetails/book.details.component'
import BookCreate from './BookCreate/book.create.component'
import AllBook from './AllBook/book.all.component'

class Books extends Component {
  render() {
    return (
      <Container>
        {
          this.props.location.pathname === '/books'
          && <AllBook />
        }
        {
          this.props.location.pathname === '/books/create'
          && <BookCreate />
        }
        {
          this.props.location.pathname === '/book/:id'
          && <BookDetails />
        }
      </Container>
    )
  }
}

export default Books;
