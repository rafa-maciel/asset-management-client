import SearchContent from "../../contexts/components/utils/SearchContent";
import { post, search } from "../xhr";


export function searchLocations( params ) {
    return search("/locations/search", params)
        .then(data => new SearchContent(data))
}

export function createNewLocation( location ) {
    return post('/locations', location)
        .then(resp => {
            if (resp.status === 201) {
                return resp.data
            } 
            console.log(resp)
            throw new Error('API endpoint error')
        })
}