
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
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