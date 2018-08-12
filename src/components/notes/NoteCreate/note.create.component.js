import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

// temp
import config from '../../../config/const'
import options from '../../../config/options'

class NoteCreate extends Component {
  state = {
    books: [],
		bookId: ''
  }
  async componentWillMount() {
		if(!this.props.location.state) {
			// if(!this.props.location.state.id) {
				return this.props.history.push("/books")
			// }
		} else {
			await this.setState({
				bookId: this.props.location.state.id
			})
		}
    const books = await axios(`${config.API_URL}/books`,  options())
		console.log(books);
    this.setState({
      books: books.data.books
    })
  }
  renderOptions = () => {
    this.state.books.map((book, key) => (
      <option key={key} value={book._id}>{book.title}</option>
    ))
  }
  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
		console.log(event.target.value)
  }
  formSubmit = async event => {
    event.preventDefault()
    const data = this.state
    const notes = await axios(`${config.API_URL}/notes`, options('POST', this.state))
    if(notes.data.status) {
      this.props.history.push('/notes')
    }
  }
  render() {
    return (
      <div>
        {
          this.state.books.length === 0
          ? <div>loading... </div>
          : (
            <form onSubmit={this.formSubmit}>
							<h2>Add Chapter</h2>
              <input type='text' id='title' placeholder='enter title' onChange={this.onInputChange} /><br /><br />
              <input type='text' id='description' placeholder='enter description' onChange={this.onInputChange} /><br /><br />
              <textarea rows='5' id='content' placeholder='enter your notes' onChange={this.onInputChange} /><br /><br />
              {/* <select id='bookId' name='bookId' onChange={this.onInputChange} onClick={this.onInputChange}>
                {
                  this.state.books.map((book, key) => {
                    return <option key={key} value={book._id}>{book.title}</option>
                  })
                }
              </select><br /><br /> */}
              <button type='submit'>Submit</button>
            </form>
          )
        }
      </div>
    )
  }
}

export default withRouter(connect(null, null)(NoteCreate))
