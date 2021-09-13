import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React from 'react'

export default function UserAccountTable({ data: accounts, onPageChange, onRowsPerPageChange, pageableData: pageable }) {
    return (
        <>            
            <Table size="small" aria-label="User Account Table" className="user-account-table">
                <UserAccountTableHeader />

                <TableBody>
                    { accounts ?  accounts.map((account, index) => <UATableRow userAccount={ account} key={ index } />) : null}
                </TableBody>

                { pageable ? (
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                                rowsPerPageOptions={pageable.rowsPerPageOptions} 
                                count={pageable.totalElements}
                                rowsPerPage={pageable.pageSize}
                                page={pageable.pageNumber}
                                onPageChange={(event, number) => onPageChange(number) }
                                onRowsPerPageChange={event => onRowsPerPageChange(event.target.value)}
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