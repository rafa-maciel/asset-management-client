import React from 'react'
import { Button, Grid, Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from '@material-ui/core'
import { useAssetTableContext } from '../../../contexts/components/assets/list'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { AssetFilterForm } from '.';


export default function AssetTable({ showFilter, onCloseFilter, onError }) {
    const [ assets, page, changeFilterParams, changeRowsPerPage, changePage ] = useAssetTableContext(onError)

    const handleFilterForm = data => {
        changeFilterParams(data)
        onCloseFilter()
    }

    return (
        <>
            <Table aria-label="Assets Table" className="assets-table">
                <AssetTableHeader />

                <TableBody>
                    { assets ? assets.map((assets, index) => <AssetTableRow asset={ assets } key={ index } />) : null}
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

            <AssetFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ onCloseFilter } />
        </>
    )
}

function AssetTableHeader() {
    const headers = ['Identificação', 'Responsável', 
        'Localização', 'Modelo', 'Tipo', 'Chip ID', 
        'Chip Linha', 'Status', 'Contrato', 'Fornecedor', 'Ações']
    return (
        <TableHead>
            <TableRow>
                { headers.map((title, index) => <TableCell key={ index }> {title} </TableCell>) }
            </TableRow>
        </TableHead>
    )
}

function AssetTableRow({ asset }) {
    return (
        <TableRow>
            <TableCell>{ asset.companyIdentification }</TableCell>
            <TableCell>{ asset.owner.name }</TableCell>
            <TableCell>{ asset.location.title }</TableCell>
            <TableCell>{ asset.model.title }</TableCell>
            <TableCell>{ asset.model.type }</TableCell>
            <TableCell>{ asset.chipIdentification }</TableCell>
            <TableCell>{ asset.lineIdentification }</TableCell>
            <TableCell>{ asset.status }</TableCell>
            <TableCell>{ asset.contract ? asset.contract.number : 'Sem contrato'}</TableCell>
            <TableCell>{ asset.contract ? asset.contract.vendor : 'Sem contrato'}</TableCell>

            <TableCell>
                <Grid container justifyContent="flex-end" spacing={3} >
                    <Grid item>
                        <Button
                            component={ Link }
                            size="small"
                            to={{
                                pathname: '/assets/update',
                                state: { 'assetId': asset.id }
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
                                pathname: '/assets/delete',
                                state: { 'assetId': asset.id }
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