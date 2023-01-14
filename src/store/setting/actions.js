
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async updateSetting({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.setting.setting}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchSettingById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.setting.setting}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_SETTING_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchSetting({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.setting.setting}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_SETTING_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}