
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async onFetchOverAll({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.dashboard.overall}?date=${data}`
            const response = await INSTANCE.get(url)
            commit("SET_DASHBOARD_OVERALL", response.data.data)
            commit("SET_DASHBOARD_GRAPH", response.data.data)
            return response.data.data
        } catch (error) {
            return false
        }
    },
}