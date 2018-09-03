import axios from 'axios'
import config from '../../../config/const'
import options from '../../../config/options'

import { SET_USERS } from '../../actionTypes/users.actionType' 

export const setStartUsers = () =>{
	return dispatch => {
		return axios(`${config.API_URL}/users`,  options('GET'))
		   .then(res=>{
			if(res.data.status) {
			  const users = res.data;
			  console.log(users);
			dispatch(setUsers(users));
			}else {
			   console.log('error');
			}
		   })            
		  };
}

const setUsers = (users) => ({
		type: SET_USERS,
		data: users
})