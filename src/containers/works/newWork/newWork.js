// import React, { Component } from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import TextField from '@material-ui/core/TextField';
// import { withStyles } from '@material-ui/core/styles';
//import { MuiGrid } from './muiComponents';
//  class NewWork extends Component{
//     render(){
//       const {classes} = this.props;
//     return(
//         <React.Fragment>
//           <MuiGrid container>
//             <MuiGrid item sm={3}>
//              image here
//             </MuiGrid> 
//             <MuiGrid item sm={6}>
//               form here
//             </MuiGrid>  
//           </MuiGrid>
//          </React.Fragment>
//     )
// } 
// }
// export default NewWork;  



import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'; 
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
//import Avatar from './avatar.js'; 
 
const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: 'inherit'
  },
  heroContent: {
    maxWidth: '600',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  name: {
		fontSize: "2rem",
		opacity: "0.80",
		textTransform: "capitalize"
  },
  title: {
		fontSize: "1rem",
		opacity: "0.80",
		textTransform: "capitalize"
  },
  para: {
		color: "grey",
		opacity: "1",
		wordSpacing: "2.5px",
		letterSpacing: "1.2px",
		fontSize: "1rem",
    fontWeight: 330,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  follow: {
    margin:'1.4rem 0 0 1.5rem',
    
  },
  followStyle: {
    color: "grey",
		opacity: "1",
    marginTop:'1rem',
    wordSpacing: "2.5px",
		letterSpacing: "1.2px",
    fontSize: "1rem",
    fontWeight: 330,
  },
  content: {
    flex: '1 0 auto',
  },
  image: {
    width:'100%',
    height:'100%',
  },
  card: {
    display: 'flex',
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  cardMedia: {
    display:'flex',
    paddingTop: '56.25%', // 16:9
    margin:'auto',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3, 4, 5, 6];

function Album(props) {
  const { classes } = props; 
 
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
           <Grid container>
             <Grid item sm={3} style={{paddingRight:23}}>
              image
             </Grid>
             <Grid item sm={5} style={{padding:0}}>  
                <Typography className={classes.name} align="left" color="textPrimary" gutterBottom>
                FirstNam LastName
                </Typography>
                <Typography variant="title" className={classes.para} align="left" color="textSecondary" paragraph>
                Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely.
                </Typography>
              </Grid> 
            <Grid item sm className={classes.follow}>
              <Typography className={classes.followStyle} align="center">
                Following: 45
              </Typography>
               <Typography className={classes.followStyle} align="center">
               Followers: 67
               </Typography>
               <Typography align="center">
               <Button variant="outlined" color="primary" style={{marginTop:'1rem'}}>
                Follow
                </Button>
                </Typography>
           </Grid>   
            </Grid> 
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Tabs value={0}>
                    <Tab label="item 1"/>
                    <Tab label="item 1"/>
                    <Tab label="item 1"/>
                  </Tabs>   
                </Grid>
               </Grid>
               <Divider/> 
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={6} lg={6}>
              <div>     
              <Card className={classes.card}>
                <Grid container>
                 <Grid item sm={6}> 
                <CardMedia
                  className={classes.image}
                  image="https://picsum.photos/200/300"
                />
                </Grid>
                <Grid item sm={6}>
                <CardMedia
                title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="headline" className={classes.title}>Live From Space</Typography>
                    <Typography variant="subheading" className={classes.title} color="textSecondary">
                      Mac Miller
                    </Typography>
                  </CardContent>
                  <CardContent>
                  <Typography className={classes.para}>
                    California beaches are the best in the world, during the summer many come visit the place
                    It attracts a lot of visitors every year  
                 </Typography>
                </CardContent>
                </div>
                </Grid>
              </Grid> 
              </Card>
            </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="title" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);