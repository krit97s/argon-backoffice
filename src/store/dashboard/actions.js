
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async onFetchOverAll({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.dashboard.overall}?date=${data}`
            const response = await INSTANCE.get(url)
            commit("SET_DASHBOARD_OVERALL", response.data.data)
            return true
        } catch (error) {
            return false
        }
    },
}