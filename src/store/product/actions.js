
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async updateOption({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.option}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async removeOption({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.option}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchOptionById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.option}/?id=${data}`
            const response = await INSTANCE.get(url)
            commit("SET_OPTION_BY_ID", response.data.data)
            return true
        } catch (error) {
            return false
        }
    },
    async addOption({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.option}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async removeProduct({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.product}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateProduct({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.product}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchProductById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.product}/?id=${data}`
            const response = await INSTANCE.get(url)
            commit("SET_PRODUCT_BY_ID", response.data.data)
            return true
        } catch (error) {
            return false
        }
    },
    async addProduct({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.product}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchProduct({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.product.product}`
            const response = await INSTANCE.get(url)
            commit("SET_PRODUCT_LIST", response.data.data)
            return true
        } catch (error) {
            return false
        }
    },
}