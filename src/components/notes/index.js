import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'reactstrap'
import NoteCreate from './NoteCreate/note.create.component'

class Author extends Component {
  render() {
    return (
      <Container>
        {
          this.props.location.pathname === '/notes/create'
          && <NoteCreate />
        }
      </Container>
    )
  }
}

export default Author
