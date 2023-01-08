export default {
  SET_DEPOSIT_LIST(state, payload) {
    state.depositList = payload.data
    state.depositMeta = payload.meta
  },
}