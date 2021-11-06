import { useEffect, useState } from "react"
import { searchAssets } from "../../../../adapters/assets"
import { useTablePageable } from "../../../commons/useTablePageable"

function useAssetTableContext( onFilterError ) {
    const [ assets, setAssets ] = useState(null)
    const [ filterParams, setFilterParams ] = useState(null)
    const [ page, setPage ] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()

    useEffect(() => {
        if ( filterParams ) {
            filterParams['size'] = rowsPerPage
            filterParams['page'] = currentPage
        }

        searchAssets(filterParams)
            .then( searchContent => onSearchSuccess(searchContent))
            .catch( error => {
                console.log(error)
                onFilterError(error)
            })

    }, [ filterParams, rowsPerPage, currentPage, onFilterError ])

    const onSearchSuccess = ( response ) => {
        setAssets(response.content)
        setPage(response.page)
    }

    const changeFilterParams = params => {
        changePage(0)
        setFilterParams(params)
    }

    return [ assets, page, changeFilterParams, changeRowsPerPage, changePage ]
}

export { useAssetTableContext }