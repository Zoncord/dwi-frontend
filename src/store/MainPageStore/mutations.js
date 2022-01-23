export function changeScroll (state, delta) {
  state.scroll += delta
}
export function changeScreen(state, newScreenName){
  state.currentScreen = newScreenName
  state.startScrollVal = state.scroll
}
export function showAdditionalContent(state){
  state.canShowAdditionalContent = true
}
export function hideAdditionalContent(state){
  state.canShowAdditionalContent = false
}
