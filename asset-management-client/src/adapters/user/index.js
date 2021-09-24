import SearchContent from "../../contexts/components/utils/SearchContent";
import { search } from "../xhr";

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