
import { instance as INSTANCE } from '../../../axios.config'
import ENDPOINT_CONFIG from '../../../endpoint.config'

export default {
    async removeCarousel({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.carousel.carousel}/?id=${data}`
            const response = await INSTANCE.delete(url)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async updateCarousel({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.carousel.carousel}`
            const response = await INSTANCE.patch(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async addCarousel({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.carousel.carousel}`
            const response = await INSTANCE.post(url, data)
            return { status: true, response: response.data }
        } catch (error) {
            return { status: false, response: error.response.data }
        }
    },
    async onFetchCarouselById({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.carousel.carousel}?id=${data.id}`
            const response = await INSTANCE.get(url)
            commit("SET_CAROUSEL_BY_ID", response.data)
            return true
        } catch (error) {
            return false
        }
    },
    async onFetchCarousel({ commit }, data) {
        try {
            const url = `${ENDPOINT_CONFIG.carousel.carousel}?page=${data.page}&perPage=${data.perPage}`
            const response = await INSTANCE.get(url)
            commit("SET_CAROUSEL_LIST", response.data)
            return true
        } catch (error) {
            return false
        }
    },
}