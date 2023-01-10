export default {
  SET_CAROUSEL_BY_ID(state, payload) {
    state.carousel = payload.data
  },
  SET_CAROUSEL_LIST(state, payload) {
    state.carouselList = payload.data
    state.carouselMeta = payload.meta
  },
}