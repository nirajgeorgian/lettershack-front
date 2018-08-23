import Grid from '@material-ui/core/Grid';
import { JssProvider } from 'react-jss';
import React from 'react';
export const MuiGrid = props => {
    return(
        <JssProvider classNamePrefix="Material-ui-grid-">
         <Grid {...props}/>
        </JssProvider>
    );
}