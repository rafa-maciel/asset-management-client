import SearchContent from "../../contexts/components/SearchContent"
import { get, post, put, search } from "../xhr"

export function searchUserAccounts(params) {
    return search("/accounts/search", params)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
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