import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  token:null,
  user:null,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}