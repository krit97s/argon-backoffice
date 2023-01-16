
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async Authoriztaion({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.auth.auth}`
            const response = await INSTANCE.post(url, data)
            commit("SET_LOCAL_STORAGE", response.data.token)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },

}