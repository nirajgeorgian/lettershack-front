import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUserDispatcher } from '../../actions/actionCreator/logout.action'

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

	handleLogout = event => {
		this.props.logoutUserDispatcher()
	}
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/" className="navbar-brand">reactstrap</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
							<NavItem>
                <Link to="/account/login" className="nav-link">Login</Link>
              </NavItem>
							<NavItem>
                <Link to="/account/signup" className="nav-link">Signup</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Username
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Profile
                  </DropdownItem>
                  <DropdownItem>
                    Pages
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick = { this.handleLogout }>
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ logoutUserDispatcher }, dispatch)
}

export default connect(null, mapDispatchToProps)(NavbarComponent)
