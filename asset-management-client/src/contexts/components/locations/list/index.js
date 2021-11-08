import { useEffect, useState } from "react"
import { searchLocations } from "../../../../adapters/locations"
import { useTablePageable } from "../../../commons/useTablePageable"

function useLocationTableContext( onFilterError ) {
    const [ locations, setLocations ] = useState(null)
    const [ filterParams, setFilterParams ] = useState(null)
    const [ page, setPage ] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()

    useEffect(() => {
        if ( filterParams ) {
            filterParams['size'] = rowsPerPage
            filterParams['page'] = currentPage
        }

        searchLocations(filterParams)
            .then( searchContent => onSearchSuccess(searchContent))
            .catch( error => {
                console.log(error)
                onFilterError(error)
            })

    }, [ filterParams, rowsPerPage, currentPage, onFilterError ])

    const onSearchSuccess = ( response ) => {
        setLocations(response.content)
        setPage(response.page)
    }

    const changeFilterParams = params => {
        changePage(0)
        setFilterParams(params)
    }

    return [ locations, page, changeFilterParams, changeRowsPerPage, changePage ]
}

export { useLocationTableContext }