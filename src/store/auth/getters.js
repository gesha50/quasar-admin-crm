export function isLogged (s) {
  return !!s.user
}
export function getToken (state) {
  return state.user.token
}
