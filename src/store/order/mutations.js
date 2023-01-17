export default {
  SET_ORDER_WATING_LIST(state, payload) {
    state.orderWatingList = payload.data
    state.orderWatingMeta = payload.meta
  },
  SET_ORDER_LIST(state, payload) {
    state.orderList = payload.data
    state.orderMeta = payload.meta
  },
}