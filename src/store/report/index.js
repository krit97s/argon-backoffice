import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  reportList: [],
  reportMeta: { currentPage: 1, totalLength: 0, totalPage: 0 },
  reportResultList: [],
  reportResultMeta: { currentPage: 1, totalLength: 0, totalPage: 0 },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}