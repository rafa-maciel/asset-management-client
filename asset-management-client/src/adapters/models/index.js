import SearchContent from "../../contexts/components/utils/SearchContent";
import { doDelete, get, post, put, search } from "../xhr";

export function searchModels( params ) {
    return search("/models/search", params)
        .then(data => new SearchContent(data))
}

export function createNewModel( model ) {
    return post('/models', model)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function findModel( modelId ) {
    var url = "/models/" + modelId
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateModel( id, model ) {
    var url = "/models/" + id
    return put(url, model)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function deleteModel(modelId) {
    var url = "/models/" + modelId
    return doDelete(url)
        .then(resp => {
            if (resp.status === 200) {
                return true
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}