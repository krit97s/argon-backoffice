
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async removeSource({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.source.source}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateSource({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.source.source}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async addSource({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.source.source}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchSourceById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.source.source}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_SOURCE_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchSource({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.source.source}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_SOURCE_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}