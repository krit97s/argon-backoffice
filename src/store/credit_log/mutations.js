export default {
  SET_LOG_LIST(state, payload) {
    state.creditList = payload.data
    state.creditMeta = payload.meta
  },
}