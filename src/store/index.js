import {store} from 'quasar/wrappers'
import createPersistedState from "vuex-persistedstate"
import {createStore} from 'vuex'
import mainPageStore from './StartPageStore'
import HeaderStore from './HeaderStore'
import GridStore from './GridStore'


export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      mainPageStore,
      HeaderStore,
      GridStore,
    },
    plugins: [createPersistedState()],
    strict: process.env.DEBUGGING
  })

  return Store
})
