import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles } from './myWorks.style'
import ScrollableTabsButtonAuto from './tabComp'
import WorkCard from '../userWorkCard/workCard'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class MyWork extends Component {
	state = {
		value: 0
	}

	handleChange = (event, value) => {
		this.setState({ value })
	}

	render() {
		const { classes } = this.props
		const { value } = this.props
		return (
			<Grid container spacing={16} className={classes.container}>
				<Grid item xs={8} sm={8} md={8} lg={8}>
					<Grid container spacing={32}>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<Grid container spacing={16} direction="row" justify="flex-start" alignItems="center">
								<h3>My Works</h3>
							</Grid>
						</Grid>
						<Grid item xs={12} sm={6} md={6} lg={6}>
							<Grid container spacing={16} direction="row" justify="flex-end" alignItems="center">
								<Button variant="contained" color="primary">
									<AddIcon />
									New Story
								</Button>
							</Grid>
						</Grid>
					</Grid>
					<Grid container spacing={32}>
						<Grid item xs={12} sm={12} md={12} lg={12}>
							<ScrollableTabsButtonAuto
								comp1={() => <WorkCard />}
								comp2={() => <WorkCard />}
							/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={4} xm={4} md={4} lg={4}>
					{/* for displaying google ads */}
				</Grid>
				<div className="head">

				</div>
			</Grid>
		)
	}
}

export default withRouter(withStyles(styles)(MyWork))
