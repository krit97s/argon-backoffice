
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async onFetchReportResult({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.report.result}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_REPORT_RESULT_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchReport({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.report.report}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_REPORT_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}