export default {
  SET_CATEGORY_BY_ID(state, payload) {
    state.category = payload.data
  },
  SET_CATEGORY_LIST(state, payload) {
    state.categoryList = payload.data
    state.categoryMeta = payload.meta
  },
}