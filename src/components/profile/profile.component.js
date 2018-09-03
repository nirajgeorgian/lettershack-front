import React, { Component } from 'react'
import ProfileDashboard from './profile.dashboard';
class Profile extends Component {
	constructor(props){
      super(props);
	}
	render() {
		return (
			<ProfileDashboard {...this.props}/>
		)
	}
}

export default Profile
   