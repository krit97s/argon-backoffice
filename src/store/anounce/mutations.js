export default {
  SET_ANOUNCE_BY_ID(state, payload) {
    state.anounce = payload.data
  },
  SET_ANOUNCE_LIST(state, payload) {
    state.anounceList = payload.data
    state.anounceMeta = payload.meta
  },
}