import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
	Form, FormGroup, Label, Input, Col, Button, Row, Container
} from 'reactstrap'
import { Link } from 'react-router-dom'
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

	componentDidMount() {
		const tagElem = document.querySelector('#tags')
	}

  onFormSubmit = async event => {
    event.preventDefault()
		const tagList = []
		for(let i of this.state.tags.split(",")) {
			tagList.push(i.trim())
		}
		this.setState({
			tagList
		})
		await this.props.createBookDispatcher(this.state)
		this.props.history.push('/books')
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
          <Label for='title' sm={3}>Tags</Label>
          <Col sm={9}>
            <Input
              type='text'
              name='tags'
              id='tags'
              placeholder='Enter your tags ..'
              value = { this.state.tags }
              onChange = { this.onInputChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for='password' sm={3}>Description</Label>
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
            <Button outline color='primary' type="submit">Create Book</Button>{''}
          </Col>
        </FormGroup>
      </Form>
			<Link to='/books'>All Books</Link>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ createBookDispatcher }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(BookCreate))
