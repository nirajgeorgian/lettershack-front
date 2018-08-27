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
    
  text:{
    paddingBottom:20,
    
},
divider:{
    marginTop:20,
    marginBottom:20
},
bootstrapRoot: {
    padding: 0,
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
          
},
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 20,
    fontWeight: 500,
    color:'black'
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
              <img src="https://picsum.photos/200/300"/>
            </Grid> 
            <Grid item sm={6}>
              <Card>
                <CardContent>
                  <Typography>Story Details</Typography>
                  <Divider className={classes.divider}/>
                  <TextField
                   className={classes.text}
                   fullWidth={true}
                   autoFocus={true}                   
                   defaultValue="My first Story"
                   label="Title"
                   id="bootstrap-input" 
                   InputProps={{
                   disableUnderline: true,
                   classes: {
                   root: classes.bootstrapRoot,
                   input: classes.bootstrapInput,
                     },
                     }}
                   InputLabelProps={{
                   shrink: true,
                   className: classes.bootstrapFormLabel,
                   }}
                 />
                 <Typography></Typography>
                  <TextField
                  className={classes.text}
                  fullWidth={true}
                  label="Description"
                  id="bootstrap-input" 
                  InputProps={{
                  disableUnderline: true,
                  classes: {
                  root: classes.bootstrapRoot,
                  input: classes.bootstrapInput,
                     },
                    }}
                  InputLabelProps={{
                  shrink: true,
                  className: classes.bootstrapFormLabel,
                 }}
                   defaultValue="random description"
                   multiline={true}
                   rows="5"
                  />
                </CardContent>
              </Card>
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

