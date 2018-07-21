import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Lodable from 'react-loadable'
import Routes from './routes/index'

const AsyncComponent = Lodable({
	loader: () => import(/* webpackChunkName: "lettershack" */ './components/navbar/navbar.component'),
	loading: () => <div>Loading...</div>,
	modules: ['lettershack']
})

class App extends Component {
  render() {
    return (
			<div>
				<AsyncComponent />
				<Container className="App">
					<Routes />
				</Container>
			</div>
    );
  }
}

export default App;
