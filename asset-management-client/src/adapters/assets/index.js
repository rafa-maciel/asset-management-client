import SearchContent from "../../contexts/components/utils/SearchContent";
import { doDelete, get, post, put, search } from "../xhr";


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

export function findAsset( assetId ) {
    var url = "/assets/" + assetId
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                console.log(resp.data)
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateAsset( id, asset ) {
    var url = "/assets/" + id
    return put(url, asset)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteAsset(assetId) {
    var url = "/assets/" + assetId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function importAssets(assets) {
    var url = "/assets/import"
    return post(url, assets)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}
