import { SET_USERS } from '../../actions/actionTypes/users.actionType'


const usersReducer = (state = {}, action) => {
    switch (action.type) {
      case SET_USERS:
        return ({
           ...state, 
          data: action.data
        })
      default:
      return state
    }
}
export default usersReducer;