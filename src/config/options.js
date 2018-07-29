import getToken from './getToken'

const token = getToken()

const options = (method = 'GET', data = {}) => ({
  method: method,
  mode: 'cors',
  'catche': 'default',
  headers: {
    'Content-Type': 'application/json',
    'x-auth-token': token === null ? '' : token
  },
  data: data
})

export default options
