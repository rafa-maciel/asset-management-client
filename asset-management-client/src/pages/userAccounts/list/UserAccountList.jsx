import { Button, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { searchUserAccounts } from '../../../adapters/userAccount/list'
import { UserAccountSearchForm as SearchForm, UserAccountTable } from '../../../components/userAccounts/list'

export default function UserAccountListPage() {
    // Message
    const [pageMessage, setPageMessage] = useState(null)

    // Filter Form
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [searchParams, setSearchParams] = useState({})
    const [userAccountList, setUserAccountList] = useState(null)

    // Page
    const [pageable, setPageable] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(20)



    useEffect(() => {
        searchParams.size = rowsPerPage
        searchParams.page = currentPage
        
        searchUserAccounts(searchParams)
            .then(result => {
                setUserAccountList(result.content)
                setPageable(result.page)

                addPageMessage('success', 'Pesquisa Realizada', '')
            }).catch(error => {
                console.log(error)
                addPageMessage('error', 'Não foi possivel filtrar tabela', 'Falha ao pesquisar contas')
            })
    }, [ searchParams, rowsPerPage, currentPage ])

    const handleSearchParamsChange = params => {
        setShowSearchModal(false)
        setCurrentPage(0)
        setSearchParams(params)
    }

    const handleRowsPerPageChange = rowsSize => {
        setCurrentPage(0)
        setRowsPerPage(rowsSize)
    }

    const addPageMessage = (type, title, message) => {
        setPageMessage({ type, title, message})
    }


    return (
        <>
            <Typography variant="h3" component="h1">Contas de Usuários do Sistema</Typography>
            <Button onClick={() => {setShowSearchModal(true)}}>Filtro de Pesquisa</Button>
            
            { pageMessage ? 
                <Alert severity={ pageMessage.type }>
                    <AlertTitle>{ pageMessage.title }</AlertTitle>
                    <strong>{pageMessage.message}</strong>
                </Alert>
            : null}

            <SearchForm 
                showModal={ showSearchModal }
                onCloseModal={ e => { setShowSearchModal(false )}}
                onFormSubmit={ handleSearchParamsChange } />

            
            <UserAccountTable 
                data={ userAccountList } 
                onPageChange={pageNumber => { setCurrentPage(pageNumber) }} 
                onRowsPerPageChange={rowsSize => { handleRowsPerPageChange(rowsSize) }}
                pageableData={ pageable }/>
        </>
    )
}