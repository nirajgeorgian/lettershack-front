import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import img1 from '../../img/img1.png'

const styles = theme => ({
  card: {
    display: 'flex',
  },
  cover: {
    width: "250px",
    height: "150px",
	  margin: "10px 10px 50px 20px",
		border: "0.3px solid lightgrey",
	  borderRadius: "2px",
	  boxShadow: "1px 1px 5px lightgrey"
  },
	content: {
	  justifyContent: "center"
	},
	h4: {
	  opacity: 0.8
	},
	fade: {
	  opacity: 0.6
	},
	h3: {
	  textTransform: "capitalize"
	}
});

function MediaControlCard(props) {
  const { classes, theme, data } = props;

  return (
    <div>
      <Card className={classes.card}>
				<CardMedia
          className={classes.cover}
          image={img1}
          title="Live from space album cover"
        />
				<CardContent className={classes.content}>
					<Typography variant="headline">{data.title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            by <strong>{data.author}</strong>
          </Typography>
					<Typography variant="subheading" color="textSecondary">
            ratings: {data.rating} {data.votes}
          </Typography>
					<Typography paragraph>
						{data.details}
					</Typography>
				</CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(MediaControlCard)
