import { api } from 'boot/axios'

export function register ({ commit },newUserData) {
  return api.post('/api/register', newUserData)
    .then(({ data }) => {
      console.log(data)
      commit('setIsRegister', data)
    })
    .catch(e => {
      console.log(e)
    })
}

export function login ({ commit }, credentials) {
   return api
    .post('/api/login', credentials)
    .then(({ data }) => {
      commit('setUserData', data)
    });
}

export function logout ({ commit })  {
  api.post('/api/logout')
    .then(res => {
      console.log(res)
    })
    .catch(e => {
      console.log(e)
    })
  commit('clearUserData')
}

