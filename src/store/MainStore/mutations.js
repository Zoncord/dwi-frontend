export function someMutation (/* state */) {

}
export function changeToken(state, newToken){
  state.token = newToken
}

export function deleteToken(state){
  state.token = null
}
