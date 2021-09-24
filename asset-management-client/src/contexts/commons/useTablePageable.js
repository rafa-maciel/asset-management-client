import { useState } from "react"

const useTablePageable = ()  => {
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [currentPage, setCurrentPage] = useState(0)
    

    const changeRowsPerPage = rowsSize => {
        setCurrentPage(0)
        setRowsPerPage(rowsSize)
    }

    const changePage = number => {
        setCurrentPage(number)
    }

    return [rowsPerPage, currentPage, changeRowsPerPage, changePage]
}

export { useTablePageable }