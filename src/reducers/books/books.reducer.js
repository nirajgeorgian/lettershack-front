import {
  BOOK_CREATE_ERROR, BOOK_CREATE_FETCH, BOOK_CREATE_COMPLETE
} from '../../actions/actionTypes/book.actionTypes'

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOK_CREATE_FETCH:
      return ({
        ...state,
        data: action.data
      })
    case BOOK_CREATE_ERROR:
      return ({
        ...state,
        data: {},
        message: action.message
      })
    case BOOK_CREATE_COMPLETE:
      return ({
        ...state,
        data: {},
        book: action.data
      })
    default:
      return state
  }
}

export default booksReducer
