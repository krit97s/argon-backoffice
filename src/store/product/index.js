import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  options:[],
  product:{},
  productList: [],
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}