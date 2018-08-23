import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { MuiGrid } from './muiComponents';
 class NewWork extends Component{
    render(){
      const {classes} = this.props;
    return(
        <React.Fragment>
          <MuiGrid container>
            <MuiGrid item sm={3}>
             image here
            </MuiGrid> 
            <MuiGrid item sm={6}>
              form here
            </MuiGrid>  
          </MuiGrid>
         </React.Fragment>
    )
} 
}
export default NewWork;  