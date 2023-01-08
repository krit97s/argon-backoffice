import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  category:{},
  categoryList: [],
  categoryMeta: { currentPage: 1, totalLength: 0, totalPage: 0 },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}