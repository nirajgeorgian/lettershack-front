import React, { Component } from 'react';
import NewWorkDummy from './newWork';
import { JssProvider } from 'react-jss';
class NewWorkDummyPage extends Component {
    render(){
    return(
        <JssProvider classNamePrefix="newWork-">
         <NewWorkDummy/>
        </JssProvider>
    )
}
}
export default NewWorkDummyPage; 