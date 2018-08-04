import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

// temp
import config from '../../../config/const'
import options from '../../../config/options'

class AllNotes extends Component {
  state = {
    notes: []
  }
  async componentWillMount() {
    const notes = await axios(`${config.API_URL}/notes`,  options())
    this.setState({
      notes: notes.data.notes.docs
    })
    console.log(notes.data.notes)
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
            </div>
          )
        }
      </div>
    )
  }
}

export default withRouter(connect(null, null)(AllNotes))
