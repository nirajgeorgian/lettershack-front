import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { styles } from './emptyWork.style'

class EmptyWork extends Component {

	onCreateBook = event => {
		this.props.history.push("/books/create")
	}
	render() {
		const { classes } = this.props
		return (
			<div>
				<Grid container>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<AppBar position="static" color="default">
			        <Toolbar>
			          <Typography variant="title" color="inherit">
			            MyWorks
			          </Typography>
			        </Toolbar>
			      </AppBar>
					</Grid>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<div className={classes.center}>
							<h2>Hi {this.props.userName}! You haven't got any books or stories yet.</h2>
							<Button
								variant="contained"
								color="primary"
								onClick={this.onCreateBook}
							>Create a Story</Button>
						</div>
						<hr />
					</Grid>
				</Grid>
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	if(state.login.user){
  return{
	  userName: state.login.user.name
  }
 }else{
	 return{
       userName: localStorage.getItem('userName').replace(/['"]+/g, '')
	 }
 }
}
export default connect(mapStateToProps)(withRouter(withStyles(styles)(EmptyWork)))
