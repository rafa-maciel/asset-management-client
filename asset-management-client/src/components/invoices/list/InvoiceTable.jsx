import React from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { InvoiceFilterForm } from '.';
import { useInvoiceTableContext } from '../../../contexts/components/invoices/list';

export default function InvoiceTable({ showFilter, onCloseFilter, onError }) {
    const [ invoices, page, changeFilterParams, changeRowsPerPage, changePage ] = useInvoiceTableContext(onError)

    const handleFilterForm = data => {
        changeFilterParams(data)
        onCloseFilter()
    }

    return (
        <>
            <Table aria-label="Contracts Table" className="locations-table">
                <InvoiceTableHeader />

                <TableBody>
                    { invoices ? invoices.map((invoice, index) => <InvoiceTableRow invoice={ invoice } key={ index } />) : null}
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

            <InvoiceFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ onCloseFilter } />
        </>
    )
}

function InvoiceTableHeader() {
    const headers = ['Numero', 'Fornecedor', 'Fornecedor CNPJ', 'Começou em', 'Termina em', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}


function InvoiceTableRow({ invoice }) {
    return (
        <TableRow>
            <TableCell>{ invoice.number }</TableCell>
            <TableCell>{ invoice.vendor }</TableCell>
            <TableCell>{ invoice.vendorCNPJ }</TableCell>
            <TableCell>{ invoice.startsAt }</TableCell>
            <TableCell>{ invoice.endsAt }</TableCell>
            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/invoices/update',
                                state: { 'invoiceId': invoice.id }
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
                                pathname: '/invoices/delete',
                                state: { 'invoiceId': invoice.id }
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