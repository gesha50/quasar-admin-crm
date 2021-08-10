export function setLang ({ commit }, value) {
  commit('setLang', value)
}

export function SOCKET_newMessage (ctx, data) {
  console.log('client message '+ data)
}
