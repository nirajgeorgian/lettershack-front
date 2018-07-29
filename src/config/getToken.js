const localStorage = require('web-storage')().localStorage

const getToken = () => {
  if(localStorage.get('x-auth-key')) {
    return localStorage.get('x-auth-key')
  } else {
    return null
  }
}

export default getToken
