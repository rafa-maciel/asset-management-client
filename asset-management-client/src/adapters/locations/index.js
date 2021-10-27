import SearchContent from "../../contexts/components/utils/SearchContent";
import { get, post, put, search } from "../xhr";


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

export function findLocation( locationId ) {
    var url = "/locations/" + locationId
    return get(url)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}

export function updateLocation( id, location ) {
    var url = "/locations/" + id
    return put(url, location)
        .then(resp => {
            if (resp.status === 200) {
                return resp.data
            }
            console.log(resp)
            throw new Error('API endpoint error')
        })
}