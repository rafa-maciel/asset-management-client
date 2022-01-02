import { useEffect, useState } from "react"
import { searchInvoices } from "../../../../adapters/invoices"
import { useTablePageable } from "../../../commons/useTablePageable"

function useInvoiceTableContext( onFilterError ) {
    const [ invoice, setInvoices ] = useState(null)
    const [ filterParams, setFilterParams ] = useState(null)
    const [ page, setPage ] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()

    useEffect(() => {
        if ( filterParams ) {
            filterParams['size'] = rowsPerPage
            filterParams['page'] = currentPage
        }

        searchInvoices(filterParams)
            .then( searchContent => onSearchSuccess(searchContent))
            .catch( error => {
                console.log(error)
                onFilterError(error)
            })

    }, [ filterParams, rowsPerPage, currentPage, onFilterError ])

    const onSearchSuccess = ( response ) => {
        setInvoices(response.content)
        setPage(response.page)
    }

    const changeFilterParams = params => {
        changePage(0)
        setFilterParams(params)
    }

    return [ invoice, page, changeFilterParams, changeRowsPerPage, changePage ]
}

export { useInvoiceTableContext }