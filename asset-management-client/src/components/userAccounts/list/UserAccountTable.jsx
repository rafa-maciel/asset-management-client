import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

export default function UserAccountTable({ data: accounts, onPageChange, onRowsPerPageChange, pageableData: pageable }) {
    return (
        <>            
            <Table aria-label="User Account Table" className="user-account-table">
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
    const headers = ['Nome', 'Email', 'Status', 'Perfil', 'Ações']
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
            <TableCell>{ userAccount.profile }</TableCell>
            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/accounts/update',
                                state: { 'accountId': userAccount.id }
                            }}
                            variant="contained"
                            color="primary"
                            startIcon={ <EditIcon /> }>
                            Editar
                        </Button>
                    </Grid>
                    <Grid item>
                            <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/accounts/delete',
                                state: { 'accountId': userAccount.id }
                            }}
                            variant="contained"
                            color="secondary"
                            startIcon={ <DeleteIcon /> }>
                            Deletar
                        </Button>
                    </Grid>
                </Grid>
            </TableCell>
        </TableRow>
    )
}