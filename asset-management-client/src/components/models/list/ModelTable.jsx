import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import { useModelTableContext } from '../../../contexts/components/models/list/useModelTableContext'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ModelFilterForm } from '.';

export default function ModelTable({ showFilter, onCloseFilter, onError }) {
    const [ models, page, changeFilterParams, changeRowsPerPage, changePage ] = useModelTableContext(onError)

    const handleFilterForm = data => {
        changeFilterParams(data)
        onCloseFilter()
    }

    return (
        <>
            <Table aria-label="Users Table" className="user-table">
                <ModelTableHeader />

                <TableBody>
                    { models ? models.map((model, index) => <ModelTableRow model={ model } key={ index } />) : null}
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

            <ModelFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ onCloseFilter } />
        </>
    )
}



function ModelTableHeader() {
    const headers = ['Titulo', 'Marca', 'Tipo', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}

function ModelTableRow({ model }) {
    return (
        <TableRow>
            <TableCell>{ model.title }</TableCell>
            <TableCell>{ model.brand }</TableCell>
            <TableCell>{ model.type }</TableCell>
            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/models/update',
                                state: { 'modelId': model.id }
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
                                pathname: '/models/delete',
                                state: { 'modelId': model.id }
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