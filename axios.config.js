
import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.VUE_APP_ROOT_API,
})
instance.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
instance.interceptors.request.use(
    config => {
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


module.exports = {
    instance
}