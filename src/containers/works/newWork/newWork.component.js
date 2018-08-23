import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

function NewWork(props){
    const {classes} = props;
    return(
        <React.Fragment>
          <Grid container>
            <Grid item sm={3}>
             image here
            </Grid> 
            <Grid item sm={6}>
              form here
            </Grid>  
          </Grid>
         </React.Fragment>
    );
} 

export default NewWork;