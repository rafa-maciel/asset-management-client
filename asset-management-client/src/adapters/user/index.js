import SearchContent from "../../contexts/components/utils/SearchContent";
import { post, search } from "../xhr";

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