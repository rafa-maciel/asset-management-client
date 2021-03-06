import Axios from 'axios'
import AuthToken from '../AuthToken'

function getBaseUrl() {
    if (process.env.NODE_ENV === 'production') {
        return process.env.REACT_APP_API_ADDRESS
    }

    return "http://localhost:8080"
}

function getAxiosInstance() {
    const tokenAuth = new AuthToken()
    var baseURL = getBaseUrl()

    let apiSettings = {
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true
        }
    }

    if (tokenAuth.hasValidToken()) 
        apiSettings.headers['Authorization'] = tokenAuth.token

    return Axios.create(apiSettings)
}

function getAxiosInstanceBloob() {
    const tokenAuth = new AuthToken()
    var baseURL = getBaseUrl()
     
    let apiSettings = {
        baseURL,
        headers: {
            'Content-Type': 'application/json'
        },
        responseType: 'blob'
    }

    if (tokenAuth.hasValidToken()) 
        apiSettings.headers['Authorization'] = tokenAuth.token

    return Axios.create(apiSettings)
}


function getAxiosInstanceData() {
    const tokenAuth = new AuthToken()
    var baseURL = getBaseUrl()

    let apiSettings = {
        baseURL,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }

    if (tokenAuth.hasValidToken()) 
        apiSettings.headers['Authorization'] = tokenAuth.token

    return Axios.create(apiSettings)
}

export function get(url) {
    const axios = getAxiosInstance()
    return axios.get(url)
}

export function getBloob(url) {
    const axios = getAxiosInstanceBloob()
    return axios.get(url)
}

export function search(url, params) {
    const axios = getAxiosInstance()
    return axios.get(url, { params } )
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function post(url, requestData) {
    const axios = getAxiosInstance()
    return axios.post(url, requestData)
}

export function postFormData(url, requestData) {
    const axios = getAxiosInstanceData()
    return axios.post(url, requestData)

}

export function put(url, requestData) {
    const axios = getAxiosInstance()
    return axios.put(url, requestData)
}

export function doDelete(url) {
    const axios = getAxiosInstance()
    return axios.delete(url)
}


export function storeTokenData(data) {
    new AuthToken().build(data.token, data.timeExpiration, data.type)
}




