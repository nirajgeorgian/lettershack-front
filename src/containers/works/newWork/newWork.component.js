import React, { Component } from 'react';
import NewWork from './newWork';
import { JssProvider } from 'react-jss';
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