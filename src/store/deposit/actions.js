
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async onFetchDeposit({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.deposit.deposit}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_DEPOSIT_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}