import React from 'react';
import { withRouter } from 'react-router-dom'
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
import { logoutUserDispatcher } from '../../actions/actionCreator/accounts/logout.action'

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props)
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
		return this.props.history.push('/account/login')
	}
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Link to="/" className="navbar-brand">reactstrap</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
							{
								this.props.isAuthenticated ? (
									<React.Fragment>
										<NavItem>
											<Link to="/books/create" className="nav-link">Write</Link>
										</NavItem>
										<NavItem>
											<Link to="/notes/create" className="nav-link">create notes</Link>
										</NavItem>
										<UncontrolledDropdown nav inNavbar>
			                <DropdownToggle nav caret>
			                  Find
			                </DropdownToggle>
			                <DropdownMenu right>
			                  <DropdownItem>
			                    Agents
			                  </DropdownItem>
			                  <DropdownItem>
			                    Publisher
			                  </DropdownItem>
			                  <DropdownItem divider />
			                  <DropdownItem>
			                    Editors
			                  </DropdownItem>
			                </DropdownMenu>
			              </UncontrolledDropdown>
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
									</React.Fragment>
									) : (
										<React.Fragment>
											<NavItem>
												<Link to="/account/login" className="nav-link">Login</Link>
											</NavItem>
											<NavItem>
												<Link to="/account/signup" className="nav-link">Signup</Link>
											</NavItem>
										</React.Fragment>
									)
							}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.login.isAuthenticated
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ logoutUserDispatcher }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarComponent))
