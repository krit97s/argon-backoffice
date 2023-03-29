
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async updateOrder({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.order.order}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchOrderById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.order.orderById}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_ORDER_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchOrderWating({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.order.wating}?page=${data.page}&perPage=${data.perPage}&date=${data.date}`
            const response = await INSTANCE.get(url)
            commit("SET_ORDER_WATING_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchOrder({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.order.order}?page=${data.page}&perPage=${data.perPage}&date=${data.date}`
            const response = await INSTANCE.get(url)
            commit("SET_ORDER_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}