import axios from 'axios'
import config from '../../../config/const'
import {
  BOOK_CREATE_FETCH, BOOK_CREATE_COMPLETE, BOOK_CREATE_ERROR
} from '../../actionTypes/book.actionTypes'
import options from '../../../config/options'

const BookCreateFetch = data => ({
  type: BOOK_CREATE_FETCH,
  isFetching: true,
  data
})

const BookCreateComplete = responseData => ({
  type: BOOK_CREATE_COMPLETE,
  isFetching: false,
  data: responseData
})

const BookCreateError = err => ({
  type: BOOK_CREATE_ERROR,
  isFetching: false,
  message: err
})

export const createBookDispatcher = data => {
  return dispatch => {
    dispatch(BookCreateFetch(data))
		console.log(options('POST', data=data));
    return axios(`${config.API_URL}/books`,  options('POST', data=data))
      .then(res => {
        if(res.data.status) {
          dispatch(BookCreateComplete(res.data))
        } else {
          dispatch(BookCreateError(res.data.error))
        }
      })
      .catch(err => dispatch(BookCreateError(err)))
  }
}
