import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  order:null,
  orderMeta: { currentPage: 1, totalLength: 0, totalPage: 0 },
  orderList: [],
  orderWatingMeta: { currentPage: 1, totalLength: 0, totalPage: 0 },
  orderWatingList: [],
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}