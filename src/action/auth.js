import superagent from 'superagent'
import {cookieDelete} from '../lib/util.js'

const tokenSet = (token) => ({
  type: 'TOKEN_SET',
  payload: token,
})

const tokenRemove = () => ({
  type: 'TOKEN_REMOVE',
})

export const signup = (user) => (store) => {
  return superagent.post(`${__API_URL__}/auth`)
    .send(user)
    .withCredentials()
    .then(res => {
      return store.dispatch(tokenSet(JSON.parse(res.text).token))
    })
}

export const login = (user) => (store) => {
  return superagent.get(`${__API_URL__}/auth`)
    .auth(user.username, user.password)
    .withCredentials()
    .then(res => {
      return store.dispatch(tokenSet(JSON.parse(res.text).token))
    })
}

export const logout = () => {
  cookieDelete('X-SandBox-Token')
  return tokenRemove()
}
