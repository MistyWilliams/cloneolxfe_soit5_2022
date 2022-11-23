import Cookies from 'js-cookie'

export const islogged = () => {
  let token = Cookies.get('token')
  return (token) ? true : false
}

export const doLogin = (token, remenberPassword = false) => {
  if (remenberPassword) {
    Cookies.set('token', token, { expires:999 })
  } else {
    Cookies.set('token', token)
  }
}