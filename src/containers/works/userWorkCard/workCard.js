import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import TrendingUp from '@material-ui/icons/TrendingUp';
import Share from '@material-ui/icons/Share';
import Grid from '@material-ui/core/Grid';
import { styles } from './workCard.style'
import img2 from '../../../img/img2.jpg'

const names = [
  'Continue Writing',
  'Quit Writing',
  'Make Necessary Changes'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class WorkCard extends Component {
	state = {
		name: ""
	}

	handleChange = event => {
    this.setState({ name: event.target.value });
  };

	render() {
		const { classes } = this.props
		console.log(this.props);
		return (
			<Card className={classes.card}>
				<CardMedia
	        className={classes.cover}
	        image={img2}
	        title="I live here"
	      />
				<Grid container spacing={32}>
					<Grid item xs={6} sm={5} md={5} lg={5}>
						<div className={classes.details}>
							<CardContent className={classes.content}>
								<Typography variant="headline">My First Story</Typography>
								<Typography variant="subheading" color="textSecondary">
									1 Published Part
								</Typography>
							</CardContent>
						</div>
					</Grid>
					<Grid item xs={6} sm={7} md={7} lg={7}>
						<Grid container>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Select
									className={classes.select}
									autoWidth
									value={this.state.name}
									onChange={this.handleChange}
									input={<Input id="select-multiple" />}
									MenuProps={MenuProps}
									>
										{names.map(name => (
											<MenuItem
												key={name}
												value={name}
												>
													{name}
												</MenuItem>
											))}
									</Select>
							</Grid>
							<Grid item xs={12} sm={12} md={12} lg={12}>
								<Button variant="outlined" className={classes.button}>
									<TrendingUp />
									Stats
								</Button>
								<Button variant="outlined" className={classes.button}>
									<Share />
									Share
								</Button>
								<Button variant="outlined" className={classes.button}>
									...
								</Button>
							</Grid>
						</Grid>
					</Grid>
		    </Grid>
    </Card>
		)
	}
}

export default withStyles(styles)(WorkCard)
