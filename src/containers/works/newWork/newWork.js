import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { MuiGrid } from './muiComponents';
 class NewWork extends Component{
    render(){
      const {classes} = this.props;
    return(
        <React.Fragment>
					<Grid container>
						<Grid item xs={12} sm={4} md={4} lg={4}>
							image here
						</Grid>
						<Grid item xs={12} sm={8} md={8} lg={8}>
							form here
						</Grid>
					</Grid>
         </React.Fragment>
    )
}
}
export default NewWork;
