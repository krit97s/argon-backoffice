
import axios from 'axios'
import store from "./src/store/index"

export const instance = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
})
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token')
        token
            ? (config.headers.Authorization = `Bearer ${token}`)
            : ''
        return config
    },
    err => Promise.reject(err),
)
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.data.logout) {
            store.commit("auth/LOGOUT")
        }
        return Promise.reject(error)
    },
)
