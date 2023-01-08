export default {
  SET_INVEST_BY_ID(state, payload) {
    state.invest = payload.data
  },
  SET_INVEST_LIST(state, payload) {
    state.investList = payload.data
    state.investMeta = payload.meta
  },
}