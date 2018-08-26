import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Typography from '@material-ui/core/Typography'
import img1 from '../../img/img1.png'
import img2 from '../../img/img1.png'
import img3 from '../../img/img1.png'
import img4 from '../../img/img1.png'
import Grid from '@material-ui/core/Grid'
import SvgIcon from '@material-ui/core/SvgIcon'
import Star from '@material-ui/icons/Star'
// import classes from './index.css'
import { styles } from './styles'

class SingleBookContainer extends Component {
	render() {
		const { data, classes } = this.props
		// responsible for rendering star rating
		let stars = []
		for(let i = 0; i < 5; i++) {
			if(i < data.rating) {
				stars.push(<Star className={classes.star} key={i} />)
			} else {
				stars.push(<Star key={i} />)
			}
		}
		const starComponent = stars.map(star => {
			return star
		})
		return (
		    <Card className={classes.card}>
					<Grid container className={classes.display}>
						<Grid item xs={4} sm={4} lg={4}>
							<CardMedia
								className={classes.cover}
								image={this.props.img}
								title="Live from space album cover"
							/>
						</Grid>
						<Grid item xs={8} sm={8} lg={8} className={classes.contentitem}>
							{/*}<CardHeader
								className={classes.title}
								title={data.title}

								action={
		              <IconButton>
		                <MoreVertIcon />
		              </IconButton>
		            }
							/>*/}
							<CardContent className={classes.content}>
							<Typography variant="heading" color="textSecondary" className={classes.title}>
								 {data.title}
							</Typography>
								<Typography variant="subheading" color="textSecondary">
									by {data.author}
								</Typography>
								<Typography variant="subheading" color="textSecondary" className={classes.ratings}>
									<span>{starComponent}</span> <span className={classes.votes}>{data.votes} vosdfters</span>
								</Typography>
								<Typography paragraph className={classes.para}>
									{data.details}
								</Typography>
							</CardContent>
						</Grid>
				</Grid>
		    </Card>
		)
	}
}

export default withStyles(styles)(SingleBookContainer)
