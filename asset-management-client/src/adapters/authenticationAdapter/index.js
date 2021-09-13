import { post, storeTokenData } from '../xhr'

export function authenticate(email, password) {
    const baseUrl = "/auth"
    return post(baseUrl, {email, password})
        .then(response => {
            if (response.status === 200) {
                storeTokenData(response.data)
                return true
            }
            return false
        }).catch(error => {
            console.error(error)
            return false
        })
}

