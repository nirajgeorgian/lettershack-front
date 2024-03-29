import React, { Component } from 'react'
import SingleBookComponent from '../../containers/SingleBook/index'

const data = {
	"img": "https://cdn.dribbble.com/users/33073/screenshots/2425824/attachments/470756/full-preview.png",
	"title": "Act Like It",
	"author": "Lucy Parker",
	"rating": "4",
	"votes": "12300",
	"details": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

class HomePage extends Component {
	render() {
		return (
			<div>
				<SingleBookComponent data={data} />
			</div>
		)
	}
}

export default HomePage
