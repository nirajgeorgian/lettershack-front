import {
  NOTE_CREATE_ERROR, NOTE_CREATE_FETCH, NOTE_CREATE_COMPLETE
} from '../../actions/actionTypes/note.actionTypes'

const NotesReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTE_CREATE_FETCH:
      return ({
        ...state,
        data: action.data
      })
    case NOTE_CREATE_ERROR:
      return ({
        ...state,
        data: {},
        message: action.message
      })
    case NOTE_CREATE_COMPLETE:
      return ({
        ...state,
        data: {},
        NOTE: action.data
      })
    default:
      return state
  }
}

export default NotesReducer
