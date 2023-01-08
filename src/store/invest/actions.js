
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async removeInvest({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.invest.invest}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateInvest({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.invest.invest}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async addInvest({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.invest.invest}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchInvestById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.invest.invest}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_INVEST_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchInvest({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.invest.invest}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_INVEST_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}