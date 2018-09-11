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
import { connect } from 'react-redux';
import Avatar from './avatar.js'; 
import { setStartUsers } from '../../actions/actionCreator/users/setUsers';
import { styles } from './styles'; 
const cards = [1, 2, 3, 4, 5, 6];

class Profile extends React.Component {
  constructor(props){
    super(props);
  }
   
  render(){
    const { classes } = this.props;  
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
           <Grid container>
             <Grid item sm={3} style={{paddingRight:0}}>
              <Avatar/>
             </Grid>
             <Grid item sm={5} style={{padding:0}}>  
               
                 {
                   this.props.user?(
                <Typography className={classes.name} align="left" color="textPrimary" gutterBottom>
                 {this.props.user[0].name}
                </Typography>
                   ):
                   ('')
                 }
                {
                  this.props.user?( 
                <Typography variant="title" className={classes.para} align="left" color="textSecondary" paragraph>
                {this.props.user[0].bio}
                </Typography>
                  ):
                  ('')
                }
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
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

  const mapStateToProps = (state,props) =>{   
        const users = state.user.data;
        console.log(users);
      if(users){
        const oneUser = users.data.filter((user)=>{
          return user._id == props.match.params.id
       })
         if(oneUser){ 
         return{
           user: oneUser,
        }
      }else {
        setStartUsers();
      }
      }else {
          setStartUsers();
        }

      };
export default connect(mapStateToProps)(withStyles(styles)(Profile))
