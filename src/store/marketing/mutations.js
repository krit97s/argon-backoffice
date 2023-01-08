export default {
  SET_MARGETING_BY_ID(state, payload) {
    state.marketing = payload.data
  },
  SET_MARGETING_LIST(state, payload) {
    state.marketingList = payload.data
    state.marketingMeta = payload.meta
  },
}