import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
const styles = theme => ({
  heroUnit: {
    backgroundColor: 'inherit'
  },
  heroContent: {
    maxWidth: '600',
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
});
 
class NewWork extends Component{
    render(){
      const {classes} = this.props;
    return(
        <React.Fragment>
          <CssBaseline />
          <main>
            <div className={classes.heroUnit}>
              <div className={classes.heroContent}>
                <Grid container>
                  <Grid item sm={3}>
                   <Typography>image here</Typography>
                   </Grid> 
                  <Grid item sm={6}>
                   <Typography>form here</Typography>
                  </Grid>  
                </Grid>
             </div>
           </div>  
           </main> 
         </React.Fragment>
    );
} 
}

NewWork.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewWork);  

