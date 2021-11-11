import { doDelete, get, post, put } from "../xhr"


export function createNewContract( assetId, contract ) {
    var url = "/assets/" + assetId + "/contract"
    return post(url, contract)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findContractByAsset( assetId ) {
    var url = "/assets/" + assetId + "/contract"
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateContract( assetId, contractId, contract ) {
    var url = "/assets/" + assetId + "/contract/" + contractId
    return put(url, contract)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteContract(assetId, contractId) {
    var url = "/assets/" + assetId + "/contract/" + contractId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}