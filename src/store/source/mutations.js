export default {
  SET_SOURCE_BY_ID(state, payload) {
    state.source = payload.data
  },
  SET_SOURCE_LIST(state, payload) {
    state.sourceList = payload.data
    state.sourceMeta = payload.meta
  },
}