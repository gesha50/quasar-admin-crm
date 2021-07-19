import {api} from "boot/axios";

export function setIsRegister(state, isRegister) {
  state.isRegister = isRegister
}

export const setUserData = (state, userData) => {
  console.log(userData)
  state.user = userData
  localStorage.setItem('user', JSON.stringify(userData))
  api.defaults.headers.common.Authorization = `Bearer ${userData.token}`
}

export function clearUserData () {
  localStorage.removeItem('user')
  location.reload()
}
