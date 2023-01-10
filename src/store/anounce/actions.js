
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async removeAnounce({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.anounce.anounce}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateAnounce({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.anounce.anounce}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async addAnounce({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.anounce.anounce}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchAnounceById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.anounce.anounce}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_ANOUNCE_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchAnounce({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.anounce.anounce}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_ANOUNCE_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}