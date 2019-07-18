import Vuex from 'vuex'
import * as userModule from './modules/user'

// More info about store: https://vuex.vuejs.org/en/core-concepts.html
// See https://nuxtjs.org/guide/vuex-store#classic-mode
// structure of the store:
// types: Types that represent the keys of the mutations to commit
// state: The information of our app, we can get or update it.
// getters: Get complex information from state
// action: Sync or async operations that commit mutations
// mutations: Modify the state

export type RootState = {}

export default () => {
  return new Vuex.Store({
    modules: {
      [userModule.name]: userModule
    }
  })
}
