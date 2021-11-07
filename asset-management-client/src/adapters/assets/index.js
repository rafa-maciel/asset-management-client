import SearchContent from "../../contexts/components/utils/SearchContent";
import { post, search } from "../xhr";


export function searchAssets( params ) {
    return search("/assets/search", params)
        .then(data => new SearchContent(data))
}

export function createNewAsset( asset ) {
    return post('/assets', asset)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}
