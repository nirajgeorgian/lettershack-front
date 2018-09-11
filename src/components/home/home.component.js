import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'; 
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BookCard from '../books/BookList/bookcard.component';
import Avatar from '@material-ui/core/Avatar'
import SingleBookComponent from '../../containers/SingleBook/index'
import { styles } from './home.style'
import { data } from './data'
import remy from '../../img/remy.jpg'
import img1 from '../../img/img1.jpeg'
import img2 from '../../img/img2.jpeg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'


class HomeComponent extends Component {
	constructor(props){
		super(props);
	this.state = {
		value: 0,
		genre:undefined
		
	}
}
	handleChange = (event, value) => {
		this.setState({ value })
	}
	handleFiction =() =>{
	  if (this.props.books){
		 const fiction = this.props.books.filter((book)=> book.genre == 'fiction');
		  console.log(fiction);
        this.setState(()=>({genre:fiction}))
	  }
	}
	handleAllGenres = ()=> {
		this.setState(()=>({genre:undefined}))
	}
   getAuthor(id){
		 const user = this.props.users.data.filter((user)=> user._id == id);
		 return user[0].username;
	 }
	render() {
		console.log(this.props);
		const { value } = this.state;
		const { classes } = this.props;
		
		let books;

		if(this.state.genre){
			books = this.state.genre;
		}else{
			books = this.props.books;
		}
		return ( 
			<React.Fragment>
	      <CssBaseline />
				<div className={classes.container}>
					<Grid container spacing={16}>
						<Grid item xs={12} md={3} lg={3}>
							<h5 className={classes.subtitle}>Author of the week</h5>
							{this.props.users?
							(this.props.users.data.map(user=>{
							return(		
							<Link to={`/account/profile/${user._id}`}>	
							<div>
								<Avatar alt={user.name} src={remy} className={classes.avatar} />
								<p className={classes.iconTitle}>{user.name}</p>
							</div>
						 </Link>
							);}
							)
							):(
								<div/>
							)
							}
						</Grid>
						<Grid item xs={12} md={9} lg={9}>
							<Grid container spacing={32}>
								<Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
									<h5 className={classes.subtitle}>Popular By Genre</h5>
								</Grid>
								<Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
									<div className={classes.tabs}>
										<Tabs
						          value={value}
						          onChange={this.handleChange}
						          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
						        >
						          <Tab
						            disableRipple
									classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
									onClick={this.handleAllGenres}
						            label="All Genres"
						          />
						          <Tab
						            disableRipple
						            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						            label="Business"
						          />
						          <Tab
						            disableRipple
						            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						            label="Science"
						          />
											<Tab
						            disableRipple
						            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
									label="Fiction"
									onClick={this.handleFiction}
						          />
											<Tab
						            disableRipple
						            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						            label="Philosophy"
						          />
											<Tab
						            disableRipple
						            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
						            label="Biography"
						          />
										</Tabs>
										</div>
								</Grid>
							</Grid>
							<Grid container spacing={32}>

							{
								this.props.books && this.props.users ? (
								books.map(book=> {
								const author = this.getAuthor(book.author);
								console.log(author);
							return(
								
								<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								   <Link to={`/book/details/${book._id}`}
								   >
									<SingleBookComponent data={book} author={author} img={img3}/>
								   </Link>	 
								</Grid>
								
								);
							})
								):(<div/>)
						}
						
							</Grid>
						</Grid>
			    </Grid>
				</div>
			</React.Fragment>
		)
	}
}


const mapStateToProps = (state) =>{
	return {
			books: state.book.books,
			users: state.user.data
	}
};

export default connect(mapStateToProps)(withStyles(styles)(HomeComponent))
