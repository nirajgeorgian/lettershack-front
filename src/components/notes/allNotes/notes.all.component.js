import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

// temp
import config from '../../../config/const'
import options from '../../../config/options'

class AllNotes extends Component {
  state = {
    notes: [],
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
    const booksData = await axios(`${config.API_URL}/books`,  options())
		const books = booksData.data.books
		const notes = books.filter(book => book._id === this.state.bookId)
    await this.setState({
      notes: notes[0].chapters
    })
  }
  noteDetails = id => {
    console.log("pushed it")
  }
  render() {
    return (
      <div>
        {
          this.state.notes.length === 0
          ? <div>loading... </div>
          : (
            <div>
              {
                this.state.notes.map((note, id) => {
                  console.log(note);
                  return (
                    <div key={id} onClick={() => this.noteDetails(note._id)}>
                      <h2>{note.title}</h2>
                      <h3>{note.description}</h3>
                      <p>{note.content}</p>
                      <hr />
                    </div>
                  )
                })
              }
							<Link to= {{
								pathname: '/notes/create',
								state: { id: this.state.bookId }
							}}>Add new Chapter</Link>
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(connect(null, null)(AllNotes))
