import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Navlink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logoutUserDispatcher } from '../../actions/actionCreator/accounts/logout.action'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navLink:{
	  color: '#FFF',
	  marginLeft: 30,
	  marginRight: 10
	  },
});



class NavbarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      anchorEl: null,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
	handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

 handleProfileRedirect = () =>{
  return this.props.history.push('/account/profile')
 } 
 handleClose = () => {
    this.setState({ anchorEl: null });
    this.handleProfileRedirect();
  };


	handleLogout = event => {
		this.props.logoutUserDispatcher()
		return this.props.history.push('/')
	}
  render() {
	   const { classes } = this.props;
		const {isOpen, anchorEl } = this.state;
	     const open = Boolean(anchorEl);
    return (
      <div>
              <AppBar position="static">
            <Toolbar>
				<IconButton color="inherit" aria-label="Menu">
					<MenuIcon />
				</IconButton>
                <Typography variant="title" color="inherit">
                
					<Link to="/">reactstrap</Link>
					
            </Typography>
							{
								this.props.isAuthenticated ? (
									<React.Fragment>
										
											<Link to="/component" className={classes.navLink}>Write</Link>
										
										
											<Link to="/notes/create" className={classes.navLink}>Notes</Link>
										
													
				<div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
										
										
									</React.Fragment>
									) : (
										<React.Fragment>
										
												<Link to="/account/login" className={classes.navLink}>Login</Link>
											
											
												<Link to="/account/signup" className={classes.navLink}>Signup</Link>
											
										</React.Fragment>
									)
							}
					
        
            </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavbarComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
	return {
		isAuthenticated: state.login.isAuthenticated
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ logoutUserDispatcher }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavbarComponent)))
