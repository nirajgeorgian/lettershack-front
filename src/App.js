import React, { Component } from 'react'
import { Container } from 'reactstrap'
import NavbarComponent from './components/navbar/navbar.component'
import Auth from './components/navbar/auth/auth.component'
import Routes from './routes/index'

class App extends Component {
  render() {
    return (
			<div>
				<NavbarComponent />
				<Container className="App">
					<Routes />
				</Container>
			</div>
    );
  }
}

export default App;
