import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BookCard from '../books/BookList/bookcard.component';
import SingleBookComponent from '../../containers/SingleBook/index'
import classes from './home.component.css'
import { data } from './data'

class HomeComponent extends Component {
	render() {
		return (
			<div className={classes.container}>
				<Grid container spacing={16}>
					<Grid item xs={12} md={2} lg={2}>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</Grid>
					<Grid item xs={12} md={10} lg={10}>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={16}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={16}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={16}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={16}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
					</Grid>
		    </Grid>
			</div>
		)
	}
}

export default HomeComponent
