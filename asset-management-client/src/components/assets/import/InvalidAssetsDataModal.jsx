import React, { useEffect } from 'react'
import { AppBar, Dialog, Toolbar, IconButton, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

import CloseIcon from '@material-ui/icons/Close';

export default function InvalidAssetsDataModal({ showDialog, onClose, data }) {
    useEffect(() => {console.log(data)}, [data])

    return (
        <Dialog fullScreen open={showDialog} onClose={onClose}>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Dados não validos da importação
                    </Typography>
                </Toolbar>
            </AppBar>

            <AssetDataTable data={data}/>
        </Dialog>
    )
}


function AssetDataTable({ data, deleteLine }) {
    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Nº de Série</TableCell>
                        <TableCell>Hostname</TableCell>
                        <TableCell>TAG</TableCell>
                        <TableCell>IMEI</TableCell>
                        <TableCell>Final da Garantia</TableCell>
                        <TableCell>Ativo</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Responsável</TableCell>
                        <TableCell>Localização</TableCell>
                        <TableCell>Modelo</TableCell>
                        <TableCell>Chip</TableCell>
                        <TableCell>Linha</TableCell>
                        <TableCell>Contrato</TableCell>
                        <TableCell>Nota Fiscal</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data ? data.map((row, index) => (
                        <TableRow key={index} style={row && row.errors && row.errors.length ? {background: '#FF7F7F'} : null}>
                            <TableCell align="right" component="th">{row.serialNumber}</TableCell>
                            <TableCell align="right" component="th">{row.hostname}</TableCell>
                            <TableCell align="right" component="th">{row.tag}</TableCell>
                            <TableCell align="right" component="th">{row.imei}</TableCell>
                            <TableCell align="right" component="th">{row.endOfWarranty}</TableCell>
                            <TableCell align="right" component="th">{row.companyIdentification}</TableCell>
                            <TableCell align="right" component="th">{row.status}</TableCell>
                            <TableCell align="right" component="th">{row.owner ? row.owner.name : row.ownerRE}</TableCell>
                            <TableCell align="right" component="th">{row.location ? row.location.title : row.locationTitle }</TableCell>
                            <TableCell align="right" component="th">{row.model ? row.model.title : row.modelTitle }</TableCell>
                            <TableCell align="right" component="th">{row.chipIdentification }</TableCell>
                            <TableCell align="right" component="th">{row.lineIdentification }</TableCell>
                            <TableCell align="right" component="th">{row.contract ? row.contract.vendor : row.contractNumber }</TableCell>
                            <TableCell align="right" component="th">{row.invoice ? row.invoice.vendor : row.invoiceNumber}</TableCell>
                            <TableCell align="right" component="th">    
                                { row && row.fieldErrors ? row.fieldErrors.map((error, index) => (
                                    <p>
                                        { error.message }
                                    </p> 
                                )) : null}
                            </TableCell>
                            <TableCell align="right">
                                <IconButton aria-label="delete" onClick={e => {deleteLine(index)}}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
    )
}