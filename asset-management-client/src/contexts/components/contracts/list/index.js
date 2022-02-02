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

    const tableHeaders = [
        { 'numeric': false, 'label' : 'Número'},
        { 'numeric': false, 'label' : 'Fornecedor '},
        { 'numeric': false, 'label' : 'Fornecedor CNPJ '},
        { 'numeric': false, 'label' : 'Começou em '},
        { 'numeric': false, 'label' : 'Terminou em '},
    ]

    const pagination = {
        page,
        changePage,
        changeRowsPerPage
    }

    return [ contract, changeFilterParams, pagination, tableHeaders ]
}

export { useContractTableContext }