export default {
  SET_REPORT_LIST(state, payload) {
    state.reportList = payload.data
    state.reportMeta = payload.meta
  },
  SET_REPORT_RESULT_LIST(state, payload) {
    state.reportResultList = payload.data
    state.reportResultMeta = payload.meta
  },
}