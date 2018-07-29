import {
  NOTE_CREATE_FETCH, NOTE_CREATE_COMPLETE, NOTE_CREATE_ERROR
} from '../../actionTypes/note.actionTypes'

const NoteCreateFetch = data => ({
  type: NOTE_CREATE_FETCH,
  isFetching: true,
  data
})

const NoteCreateComplete = responseData => ({
  type: NOTE_CREATE_COMPLETE,
  isFetching: false,
  data: responseData
})

const NoteCreateError = err => ({
  type: NOTE_CREATE_ERROR,
  isFetching: false,
  message: err
})

// to create a note we need title, description and book title
export const createNoteDispatcher = data => {
  return dispatch => {
    dispatch(NoteCreateFetch(data))
    return axios(`${config.API_URL}/notes`,  options('POST', data=data))
      .then(res => {
        if(res.data.status) {
          dispatch(NoteCreateComplete(res.data))
        } else {
          dispatch(NoteCreateError(res.data.error))
        }
      })
      .catch(err => dispatch(NoteCreateError(err)))
  }
}
