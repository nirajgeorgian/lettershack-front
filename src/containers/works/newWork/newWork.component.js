import React, { Component } from 'react';
import NewWork from './newWork';
import { JssProvider } from 'react-jss'
import Grid from '@material-ui/core/Grid'
class NewWorkPage extends Component {
    render(){
    return(
        <JssProvider classNamePrefix="newWork-">
					<NewWork/>
				</JssProvider>
    )
}
}
export default NewWorkPage;
