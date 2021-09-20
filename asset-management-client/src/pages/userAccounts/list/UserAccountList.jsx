import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchUserAccounts } from '../../../adapters/userAccount'
import SnackBarMessage from '../../../components/commons/nav/SnackBarMessage'
import { UserAccountNav, UserAccountSearchForm as SearchForm, UserAccountTable } from '../../../components/userAccounts/list'

export default function UserAccountListPage() {
    // Message
    const [pageMessage, setPageMessage] = useState({ type: '', title: '', message: ''})
    const [showMessage, setShowMessage] = useState(false)
    const location = useLocation()

    // Filter Form
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [searchParams, setSearchParams] = useState({})
    const [userAccountList, setUserAccountList] = useState(null)

    // Page
    const [pageable, setPageable] = useState(null)
    const [currentPage, setCurrentPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(20)

    useEffect(() => {
        if (location && location.state && location.state.message) {
            var msg = location.state.message
            addPageMessage(msg.type, msg.title, msg.message)
        }
    }, [ location ])


    useEffect(() => {
        searchParams.size = rowsPerPage
        searchParams.page = currentPage
        
        searchUserAccounts(searchParams)
            .then(result => {
                setUserAccountList(result.content)
                setPageable(result.page)
            }).catch(error => {
                console.log(error)
                addPageMessage('error', 'Não foi possivel filtrar tabela', 'Falha ao pesquisar contas')
            })
    }, [ searchParams, rowsPerPage, currentPage ])

    const handleSearchParamsChange = params => {
        addPageMessage('success', 'Filtro de Pesquisa Ativado', 'Você está vendo uma pesquisa filtrada')

        setShowSearchModal(false)
        setCurrentPage(0)
        setSearchParams(params)
    }

    const handleRowsPerPageChange = rowsSize => {
        setCurrentPage(0)
        setRowsPerPage(rowsSize)
    }

    const addPageMessage = (type, title, message) => {
        setShowMessage(true)
        setPageMessage({ type, title, message})
    }


    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Contas de Usuários do Sistema
            </Typography>

            <UserAccountNav onShowFilterClick={ () => setShowSearchModal(true)} />

            <SearchForm 
                showModal={ showSearchModal }
                onCloseModal={ e => { setShowSearchModal(false )}}
                onFormSubmit={ handleSearchParamsChange } />

            
            <UserAccountTable 
                data={ userAccountList } 
                onPageChange={pageNumber => { setCurrentPage(pageNumber) }} 
                onRowsPerPageChange={rowsSize => { handleRowsPerPageChange(rowsSize) }}
                pageableData={ pageable }/>

            <SnackBarMessage 
                show={ showMessage }
                type={ pageMessage ? pageMessage.type : 'info' }
                title={ pageMessage ? pageMessage.title : 'No Message' }
                message={ pageMessage ? pageMessage.message : 'No Message' }
                onClose={() => setShowMessage(false)} />
        </>
    )
}