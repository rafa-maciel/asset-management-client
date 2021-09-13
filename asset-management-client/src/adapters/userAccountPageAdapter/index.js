import SearchContent from "../../contexts/components/SearchContent";
import { search } from "../xhr";

export function searchUserAccounts(params) {
    return search("/accounts/search", params)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            } 
            throw new Error('API connection error')
        })
        .then(data => new SearchContent(data))
}