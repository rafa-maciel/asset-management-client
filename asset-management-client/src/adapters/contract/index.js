import SearchContent from "../../contexts/components/utils/SearchContent"
import { doDelete, get, post, put, search } from "../xhr"


export function searchContracts( params ) {
    return search("/contracts/search", params)
        .then(data => new SearchContent(data))
}

export function createNewContract(contract) {
    var url = "/contracts"
    return post(url, contract)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findContract( contractId ) {
    var url = "/contracts/" + contractId
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
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

export function updateContract(contractId, contract ) {
    var url = "/contracts/" + contractId
    return put(url, contract)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteContract(contractId) {
    var url = "/contracts/" + contractId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}