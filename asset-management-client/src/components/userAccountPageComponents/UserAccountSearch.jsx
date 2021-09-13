import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import { searchUserAccounts } from '../../adapters/userAccountPageAdapter'
import UserAccountSearchModalForm from './UserAccountSearchModalForm'

export default function UserAccountSearch({ showFilterModal, onCloseFilterModal }) {
    const [searchParams, setSearchParams] = useState({})
    const [searchContent, setSearchContent] = useState(null)
    const [pageMessage, setPageMessage] = useState(null)
    const [rowsPerPage, setRowsPerPage] = useState(20)
    const [pageNumber, setPageNumber] = useState(0)


    useEffect(() => {
        searchParams.size = rowsPerPage
        searchParams.page = pageNumber
        searchUserAccounts(searchParams)
            .then(result => {
                setSearchContent(result)
                addPageMessage('success', 'Pesquisa Realizada', '')
            }).catch(error => {
                console.log(error)
                addPageMessage('error', 'Não foi possivel filtrar tabela', 'Falha ao pesquisar contas')
            })
    }, [ searchParams, rowsPerPage, pageNumber ])

    const handleFilterChanged = data => {
        setPageNumber(0)
        setSearchParams(data)
        onCloseFilterModal()
    }

    const addPageMessage = (type, title, message) => {
        setPageMessage({ type, title, message})
    }

    return (
        <>
            { pageMessage ? 
                <Alert severity={ pageMessage.type }>
                    <AlertTitle>{ pageMessage.title }</AlertTitle>
                    <strong>{pageMessage.message}</strong>
                </Alert>
            : null}
            <UserAccountSearchModalForm onFormSubmit={ handleFilterChanged } showModal={ showFilterModal } onCloseModal={ onCloseFilterModal } />
            
            <Table size="small" aria-label="User Account Table" className="user-account-table">
                <UserAccountTableHeader />

                <TableBody>
                    { searchContent ?  searchContent.content.map((account, index) => <UATableRow userAccount={ account} key={ index } />) : null}
                </TableBody>

                { searchContent && searchContent.page ? (
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                                rowsPerPageOptions={searchContent.page.rowsPerPageOptions} 
                                count={searchContent.page.totalElements}
                                rowsPerPage={rowsPerPage}
                                page={searchContent.page.number}
                                onPageChange={(event, number) => setPageNumber(number) }
                                onRowsPerPageChange={event => setRowsPerPage(event.target.value)}
                                />
                        </TableRow>
                    </TableFooter>
                ) : null}
            </Table>
        </>
    )
}

function UserAccountTableHeader() {
    const headers = ['Nome', 'Email', 'Status', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}

function UATableRow({ userAccount }) {
    return (
        <TableRow>
            <TableCell>{ userAccount.name }</TableCell>
            <TableCell>{ userAccount.email }</TableCell>
            <TableCell>{ userAccount.enabled ? 'Ativo' : 'Inativo' }</TableCell>
            <TableCell></TableCell>
        </TableRow>
    )
}