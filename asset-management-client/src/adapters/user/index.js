import SearchContent from "../../contexts/components/utils/SearchContent";
import { get, post, put, search, doDelete } from "../xhr";

export function searchUsers(params) {
    return search("/users/search", params)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
        .then(data => new SearchContent(data))
}

export function createNewUser(user) {
    return post('/users', user)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateUser(id, user) {
    var url = "/users/" + id
    return put(url, user)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}


export function findUser(userId) {
    var url = "/users/" + userId
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteUser(userId) {
    var url = "/users/" + userId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function importUsers(users) {
    var url = "/users/import"
    return post(url, users)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}