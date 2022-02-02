import { useEffect, useState } from "react"
import { searchModels } from "../../../../adapters/models"
import { useTablePageable } from "../../../commons/useTablePageable"

const useModelTableContext = onFilterError => {
    const [models, setModels] = useState(null)
    const [filterParams, setFilterParams] = useState(null)
    const [page, setPage] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()

    useEffect(() => {
        if ( filterParams ) {
            filterParams['size'] = rowsPerPage
            filterParams['page'] = currentPage
        }

        searchModels(filterParams)
            .then( searchContent => onSearchSuccess(searchContent))
            .catch( error => {
                console.log(error)
                onFilterError(error)
            })

    }, [ filterParams, rowsPerPage, currentPage, onFilterError ])


    const onSearchSuccess = ( response ) => {
        setModels(response.content)
        setPage(response.page)
    }

    const changeFilterParams = params => {
        changePage(0)
        setFilterParams(params)
    }

    const pagination = {
        page,
        changePage,
        changeRowsPerPage
    }

    const tableHeaders = [
        { 'numeric': false, 'label' : 'Titulo'},
        { 'numeric': false, 'label' : 'Marca '},
        { 'numeric': false, 'label' : 'Tipo '},
    ]

    return [ models, changeFilterParams, pagination, tableHeaders ]
}

export { useModelTableContext }