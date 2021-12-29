import { useEffect, useState } from "react"
import { searchContracts } from "../../../../adapters/contract"
import { useTablePageable } from "../../../commons/useTablePageable"

function useContractTableContext( onFilterError ) {
    const [ contract, setContracts ] = useState(null)
    const [ filterParams, setFilterParams ] = useState(null)
    const [ page, setPage ] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()

    useEffect(() => {
        if ( filterParams ) {
            filterParams['size'] = rowsPerPage
            filterParams['page'] = currentPage
        }

        searchContracts(filterParams)
            .then( searchContent => onSearchSuccess(searchContent))
            .catch( error => {
                console.log(error)
                onFilterError(error)
            })

    }, [ filterParams, rowsPerPage, currentPage, onFilterError ])

    const onSearchSuccess = ( response ) => {
        setContracts(response.content)
        setPage(response.page)
    }

    const changeFilterParams = params => {
        changePage(0)
        setFilterParams(params)
    }

    return [ contract, page, changeFilterParams, changeRowsPerPage, changePage ]
}

export { useContractTableContext }