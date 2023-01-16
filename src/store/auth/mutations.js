import jwt_decode from "jwt-decode"
export default {
  SET_LOCAL_STORAGE(state, payload) {
    localStorage.setItem("token", payload)
  },
  DECODE_TOKEN(state, payload) {
    const token = localStorage.getItem("token", payload)
    const user = token && jwt_decode(token)
    state.user = user
  },
  LOGOUT(state, payload) {
    localStorage.clear("token")
    state.user = null
    window.location = "/login"
  },
}