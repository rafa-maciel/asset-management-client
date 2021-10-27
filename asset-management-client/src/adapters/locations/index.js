import SearchContent from "../../contexts/components/utils/SearchContent";
import { search } from "../xhr";


export function searchLocations( params ) {
    return search("/locations/search", params)
        .then(data => new SearchContent(data))
}