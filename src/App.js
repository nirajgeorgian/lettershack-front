import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/navbar/navbar.component'
import Auth from './components/navbar/auth/auth.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
				<Auth />
      </div>
    );
  }
}

export default App;
