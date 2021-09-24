import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useUserSearch } from '../../../contexts/components/users/list/useUserSearch'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { UserSearchForm } from '.';

export default function UserTable( { showModal, onCloseModal, onError } ) {
    const [ users, page, changeParams, changeRowsPerPage, changePage ] = useUserSearch(onError)      

    return (
        <>            
            <Table aria-label="Users Table" className="user-table">
                <UserTableHeader />

                <TableBody>
                    { users ?  users.map((user, index) => <UserTableRow user={ user } key={ index } />) : null}
                </TableBody>

                { page ? (
                    <TableFooter>
                        <TableRow>
                            <TablePagination 
                                rowsPerPageOptions={page.rowsPerPageOptions} 
                                count={page.totalElements}
                                rowsPerPage={page.pageSize}
                                page={page.pageNumber}
                                onPageChange={(event, number) => changePage(number) }
                                onRowsPerPageChange={event => changeRowsPerPage(event.target.value)}
                                />
                        </TableRow>
                    </TableFooter>
                ) : null}
            </Table>

            <UserSearchForm onFormSubmit={ data => {
                changeParams(data)
                onCloseModal()
            }}
                showModal={ showModal }
                onCloseModal={ onCloseModal } />
        </>
    )
}

function UserTableHeader() {
    const headers = ['Nome', 'RE', 'Departamento', 'Status', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}

function UserTableRow({ user }) {
    return (
        <TableRow>
            <TableCell>{ user.name }</TableCell>
            <TableCell>{ user.re }</TableCell>
            <TableCell>{ user.department }</TableCell>
            <TableCell>{ user.status }</TableCell>
            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/users/update',
                                state: { 'userId': user.id }
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
                                pathname: '/users/delete',
                                state: { 'userId': user.id }
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