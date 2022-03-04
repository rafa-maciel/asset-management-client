import { Button, CircularProgress, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';

import './style.css'
import { useAssetImportForm } from '../../../contexts/components/assets/import';

export default function AssetImportForm() {
    const [onChangeFile, assets, removeAsset, importAssetToApi, loading] = useAssetImportForm()

    const ActionImportButton = () => {
        if (loading) {
            return <CircularProgress />
        } else if ( assets && assets.length > 0 ) {
            return (
                <Button 
                    disabled={ assets && assets.length === 0 }
                    variant="contained" 
                    color="primary" 
                    onClick={importAssetToApi}>
                    Importar dados para o sistema
                </Button>
            )
        } else {
            return (
                <>
                    <input
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        id="contained-button-file"
                        type="file" 
                        onChange={onChangeFile} />
                        
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span">
                            Carregar Arquivo do Excel
                        </Button>  
                    </label>
                </>
            ) 
        }         
    }

    return (
        <>
            <Grid container spacing={3} justifyContent="flex-end">
                <Grid item xs={12}>
                    <Alert variant="filled" severity="info">
                        Você deverá seguir a planilha de exemplo para completar a importação com sucesso <br />
                        Dica: para informações detalhadas de cada campo, olhar na aba "informações" da planilha de exemplo <br />
                        <a href="/files/Importar_Ativos_exemplo.xlsx">Baixar planilha modelo</a>
                    </Alert>
                </Grid>
                <Grid item>
                    <ActionImportButton />
                </Grid>
                <Grid item xs={12}>
                    <AssetDataTable data={ assets } deleteLine={ removeAsset }/>
                    { loading && <CircularProgress /> }
                </Grid>
            </Grid>
            
        </>
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
                            <TableCell align="right" component="th">{row.owner.name ? row.owner.name : row.owner.re}</TableCell>
                            <TableCell align="right" component="th">{row.location.title }</TableCell>
                            <TableCell align="right" component="th">{row.model.title }</TableCell>
                            <TableCell align="right" component="th">{row.chipIdentification }</TableCell>
                            <TableCell align="right" component="th">{row.lineIdentification }</TableCell>
                            <TableCell align="right" component="th">{row.contract.vendor ? row.contract.vendor : row.contract.number}</TableCell>
                            <TableCell align="right" component="th">{row.invoice.vendor ? row.invoice.vendor : row.invoice.number}</TableCell>
                            <TableCell align="right">
                                <ul>
                                    {row.errors.map((item, index) => <li key={index}>{item}</li>)}
                                </ul>
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
