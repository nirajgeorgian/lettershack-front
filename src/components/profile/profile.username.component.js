import React, { Component } from 'react'
import { withRouter } from 'redux'
import { connect } from 'react-redux'

class ProfileUsername extends Component {
  render() {
    return (
      <div>
        <input type='text' id='username' />
      </div>
    )
  }
}

export default withRouter(connect(null, null)(ProfileUsername))
