import { doDelete, get, getBloob, postFormData } from "../xhr"


function findFiles(url) {
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function createNewFile( file ) {
    var url = '/files'
    return postFormData(url, file)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findFilesByAsset( assetId ) {
    var url = '/files/asset/' + assetId
    return findFiles(url)
}

export function findFilesByContract( contractId ) {
    var url = '/files/contract/' + contractId
    return findFiles(url)
}

export function findFilesByInvoice( invoiceId ) {
    var url = '/files/invoice/' + invoiceId
    return findFiles(url)
}

export function deleteFile(fileId) {
    var url = '/files/' + fileId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function downloadFile(fileId) {
    var url = '/files/' + fileId
    return getBloob(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

