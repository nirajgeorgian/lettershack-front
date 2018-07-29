import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
	Form, FormGroup, Label, Input, Col, Button, Row, Container
} from 'reactstrap'
import { createBookDispatcher } from '../../../actions/actionCreator/books/books.action'

class BookCreate extends Component {
	state = {
		title: '',
		description: ''
	}

  onInputChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		})
	}

  onFormSubmit = async event => {
    event.preventDefault()
		await this.props.createBookDispatcher(this.state)
  }
  render() {
    return (
      <Container>
      <Form onSubmit = { this.onFormSubmit } className="login-form">
        <FormGroup row>
          <Label for='title' sm={3}>Title</Label>
          <Col sm={9}>
            <Input
              type='text'
              name='title'
              id='title'
              placeholder='Enter your valid title...'
              value = { this.state.title }
              onChange = { this.onInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='password' sm={3}>Password</Label>
          <Col sm={9}>
            <Input
              type='textarea'
              name='description'
              id='description'
              placeholder='Enter your description...'
              value = { this.state.description }
              onChange = { this.onInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={{ size: 9, offset: 3}}>
            <Button outline color='primary' type="submit">Login</Button>{''}
          </Col>
        </FormGroup>
      </Form>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ createBookDispatcher }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(BookCreate))
