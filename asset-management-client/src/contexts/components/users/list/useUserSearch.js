import { useEffect, useState } from "react"
import { searchUsers } from "../../../../adapters/user"
import { useTablePageable } from "../../../commons/useTablePageable"

const useUserSearch = ( onSearchError ) => {
    const [users, setUsers] = useState(null)
    const [params, setParams] = useState(null)
    const [page, setPage] = useState(null)

    const [rowsPerPage, currentPage, changeRowsPerPage, changePage] = useTablePageable()
    

    useEffect(() => {
        if (params) {
            params['size'] = rowsPerPage
            params['page'] = currentPage
        }

        searchUsers(params)
            .then( searchContent => {
                updateContent(searchContent)
            }).catch(error => {
                console.log(error)
                onSearchError(error)
            })

    }, [ params, rowsPerPage, currentPage, onSearchError ] )

    const updateContent = searchContent => {
        setUsers(searchContent.content)
        setPage(searchContent.page)
    }

    const changeParams = newParams => {
        changePage(0)
        setParams(newParams)
    }

    return [ users, page, changeParams, changeRowsPerPage, changePage ]

}

export { useUserSearch }