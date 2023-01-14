export default {
  SET_SETTING_BY_ID(state, payload) {
    state.setting = payload.data
  },
  SET_SETTING_LIST(state, payload) {
    state.settingList = payload.data
    state.settingMeta = payload.meta
  },
}