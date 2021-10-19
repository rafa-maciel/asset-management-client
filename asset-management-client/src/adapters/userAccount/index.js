import SearchContent from "../../contexts/components/utils/SearchContent"
import { doDelete, get, post, put, search } from "../xhr"

export function searchUserAccounts(params) {
    return search("/accounts/search", params)
        .then(data => new SearchContent(data))
}

export function createNewUserAccount(accountData) {
    return post("/accounts", accountData)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateUserAccount(id, accountData) {
    var url = "/accounts/" + id
    return put(url, accountData)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findUserAccount(id) {
    var url = "/accounts/" + id
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function resetUserAccount(id, newPassword) {
    var url = "/accounts/" + id + "/reset"
    return put(url, {newPassword})
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteUserAccount(id) {
    var url = "/accounts/" + id
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })

}