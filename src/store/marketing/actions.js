
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async removeMarketing({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.marketing.marketing}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateMarketing({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.marketing.marketing}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async addMarketing({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.marketing.marketing}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchMarketingById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.marketing.marketing}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_MARGETING_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchMarketing({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.marketing.marketing}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_MARGETING_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}