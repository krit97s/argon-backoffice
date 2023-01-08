export default {
  SET_OPTION_BY_ID(state, payload) {
    state.options = payload
  },
  SET_PRODUCT_BY_ID(state, payload) {
    state.product = payload
  },
  SET_FORM_UPDATE(state, payload) {
    state.formUpdate = payload
  },
  SET_PRODUCT_LIST(state, payload) {
    state.productList = payload
  },
}