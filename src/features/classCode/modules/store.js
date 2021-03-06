import * as actions from './actions'
import * as types from './mutationTypes'

const state = {
  classInfo: []
}

const getters = {
  ClassInfo: (state) => {
    return state.classInfo
  }
}

const mutations = {
  [types.CLASS_CODE] (state, data) {
    state.classInfo = data
  }
}

export default {
  mutations, getters, actions, state
}
