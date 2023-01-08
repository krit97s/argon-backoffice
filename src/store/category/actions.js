
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async removeCategory({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.category.category}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateCategory({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.category.category}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async addCategory({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.category.category}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchCategoryById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.category.category}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_CATEGORY_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchCategory({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.category.category}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_CATEGORY_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}