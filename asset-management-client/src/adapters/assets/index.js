import SearchContent from "../../contexts/components/utils/SearchContent";
import { search } from "../xhr";


export function searchAssets( params ) {
    return search("/assets/search", params)
        .then(data => new SearchContent(data))
}