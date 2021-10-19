import Axios from 'axios'
import AuthToken from '../authToken'

function getAxiosInstance() {
    const tokenAuth = new AuthToken()
     
    let apiSettings = {
        baseURL: "http://localhost:8080",
        headers: {
            'Content-Type': 'application/json'
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




