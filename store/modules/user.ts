import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'
import { RootState } from 'store'

export const namespaced = true
export const name = 'user'
export const types = {
  SET_NAME: 'SET_NAME'
}

/**
 * State
 */
export interface State {
  name: string
}

export const state = (): State => ({
  name: ''
})

/**
 * Getters
 */
export const getters: GetterTree<State, RootState> = {
  name: (state) => {
    return state.name
  }
}

/**
 * Actions
 */
export const actions: ActionTree<State, RootState> = {
  setName({ commit }, name: string) {
    commit(types.SET_NAME, name)
  }
}

/**
 * Mutations
 */
export const mutations: MutationTree<State> = {
  [types.SET_NAME](state, name: string) {
    state.name = name
  }
}
