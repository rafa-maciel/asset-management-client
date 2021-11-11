import { get, post } from "../xhr"

export function createNewNote( assetId, note ) {
    var url = '/assets/' + assetId + '/notes'
    return post(url, note)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findNotesByAsset( assetId ) {
    var url = '/assets/' + assetId + '/notes'
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}