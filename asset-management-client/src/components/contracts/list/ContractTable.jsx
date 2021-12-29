import React from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useContractTableContext } from '../../../contexts/components/contracts/list';
import { ContractFilterForm } from '.';

export default function ContractTable({ showFilter, onCloseFilter, onError }) {
    const [ contracts, page, changeFilterParams, changeRowsPerPage, changePage ] = useContractTableContext(onError)

    const handleFilterForm = data => {
        changeFilterParams(data)
        onCloseFilter()
    }

    return (
        <>
            <Table aria-label="Contracts Table" className="locations-table">
                <ContractTableHeader />

                <TableBody>
                    { contracts ? contracts.map((contract, index) => <ContractTableRow contract={ contract } key={ index } />) : null}
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

            <ContractFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ onCloseFilter } />
        </>
    )
}

function ContractTableHeader() {
    const headers = ['Numero', 'Fornecedor', 'Fornecedor CNPJ', 'Começou em', 'Termina em', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}


function ContractTableRow({ contract }) {
    return (
        <TableRow>
            <TableCell>{ contract.number }</TableCell>
            <TableCell>{ contract.vendor }</TableCell>
            <TableCell>{ contract.vendorCNPJ }</TableCell>
            <TableCell>{ contract.startsAt }</TableCell>
            <TableCell>{ contract.endsAt }</TableCell>
            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/contracts/update',
                                state: { 'contractId': contract.id }
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
                                pathname: '/contracts/delete',
                                state: { 'contractId': contract.id }
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