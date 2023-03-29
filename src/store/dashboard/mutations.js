export default {
  SET_DASHBOARD_OVERALL(state, payload) {
    state.overall = payload
  },
  SET_DASHBOARD_GRAPH(state, payload) {
    state.bigLineChart = payload.orderChart
  },
}