import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

// temp
import config from '../../../config/const'
import options from '../../../config/options'

class AllBook extends Component {
  state = {
    books: []
  }
  async componentWillMount() {
    const books = await axios(`${config.API_URL}/books`,  options())
    this.setState({
      books: books.data.books
    })
  }
  bookDetails = id => {
    console.log("pushed it")
  }
  render() {
    return (
      <div>
        {
          this.state.books.length === 0
          ? <div>loading... </div>
          : (
            <div>
              {
                this.state.books.map((book, id ) => (
                  <div key={id} onClick={() => this.bookDetails(book._id)}>
                    <h2>{book.title}</h2>
                    <h3>{book.description}</h3>
										<hr />
                  </div>
                ))
              }
            </div>
          )
        }
				<Link to='/books/create'>Create new Book</Link>
      </div>
    )
  }
}

export default withRouter(connect(null, null)(AllBook))
