import React from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { useLocationTableContext } from '../../../contexts/components/locations/list'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { LocationFilterForm } from '.';

export default function LocationTable({ showFilter, onCloseFilter, onError }) {
    const [ locations, page, changeFilterParams, changeRowsPerPage, changePage ] = useLocationTableContext(onError)

    const handleFilterForm = data => {
        changeFilterParams(data)
        onCloseFilter()
    }

    return (
        <>
            <Table aria-label="Locations Table" className="locations-table">
                <LocationTableHeader />

                <TableBody>
                    { locations ? locations.map((location, index) => <LocationTableRow location={ location } key={ index } />) : null}
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

            <LocationFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ onCloseFilter } />
        </>
    )
}

function LocationTableHeader() {
    const headers = ['Titulos', 'Notas', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}


function LocationTableRow({ location }) {
    return (
        <TableRow>
            <TableCell>{ location.title }</TableCell>
            <TableCell>{ location.notes }</TableCell>
            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/locations/update',
                                state: { 'locationId': location.id }
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
                                pathname: '/locations/delete',
                                state: { 'locationId': location.id }
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