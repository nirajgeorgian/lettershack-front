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
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BookCard from '../books/BookList/bookcard.component';
import Avatar from '@material-ui/core/Avatar'
import SingleBookComponent from '../../containers/SingleBook/index'
import { styles } from './home.style'
import { data } from './data'
import remy from '../../img/remy.jpg'

class HomeComponent extends Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { value } = this.state
		const { classes } = this.props
		return (
			<div className={classes.container}>
				<Grid container spacing={16}>
					<Grid item xs={12} md={3} lg={3}>
						<h4>Author of the week</h4>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Remy Sharp</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Gold Star</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Jimmy Wade</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Batman</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Superman</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Wonder Women</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Thor</p>
						</div>
						<div>
							<Avatar alt='Remy Sharp' src={remy} className={classes.avatar} />
							<p className={classes.iconTitle}>Hulk</p>
						</div>
					</Grid>
					<Grid item xs={12} md={9} lg={9}>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
								<h4>Popular By Genre</h4>
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
							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
							<Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
								<SingleBookComponent data={data} />
							</Grid>
						</Grid>
						<Grid container spacing={32}>
							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
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

export default withStyles(styles)(HomeComponent)
