import { doDelete, get, getBloob, postFormData } from "../xhr"

export function createNewFile( assetId, file ) {
    var url = '/assets/' + assetId + '/files'
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
    var url = '/assets/' + assetId + '/files'
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteFile(assetId, fileId) {
    var url = '/assets/' + assetId + '/files/' + fileId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function downloadFile(assetId, fileId) {
    var url = '/assets/' + assetId + '/files/' + fileId
    return getBloob(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

