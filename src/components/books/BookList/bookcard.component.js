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

const styles =  theme =>({	
  card: {
    maxWidth: 500,
    marginTop: 30,
    display: 'flex',
  },
  media: {
    width: 200	,
    height: 200,
    paddingTop: '56.25%', // 16:9
  },
});

function BookCard(props) {
	
	  const { classes } = props;
    return (
      <div>
		<Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/photos/book-cover-picture-id182732882?k=6&m=182732882&s=612x612&w=0&h=ocWwCf4oBKdYf-zLL2ktsqrBZbx9hgXw5xus2r5Gnbs="
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            <Link to ="/books"> Book1</Link>
          </Typography>
          <Link to="/books">Author</Link>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          
        </CardContent>
        
      </Card>
      </div>
    )
}
BookCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookCard);
