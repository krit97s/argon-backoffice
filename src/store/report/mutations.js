export default {
  SET_REPORT_LIST(state, payload) {
    state.reportList = payload.data
    state.reportMeta = payload.meta
  },
}