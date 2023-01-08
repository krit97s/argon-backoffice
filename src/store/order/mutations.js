export default {
  SET_ORDER_LIST(state, payload) {
    state.orderList = payload.data
    state.orderMeta = payload.meta
  },
}