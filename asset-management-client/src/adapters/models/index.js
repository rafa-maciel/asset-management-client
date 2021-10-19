import SearchContent from "../../contexts/components/utils/SearchContent";
import { post, search } from "../xhr";

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