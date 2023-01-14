
import axios from 'axios'

export const instance = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
})

instance.interceptors.request.use(
    config => {
        config.withCredentials = true
        const token = localStorage.getItem('token')
        token
            ? (config.headers.Authorization = `${token}`)
            : ''

        return config
    },
    err => Promise.reject(err),
)
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response.data.code == 401) {
            // localStorage.removeItem(jwt.jwtConfig.storageTokenKeyName)
            // localStorage.removeItem('userData')
            window.location.href = '/'
        }
        return Promise.reject(error)
    },
)