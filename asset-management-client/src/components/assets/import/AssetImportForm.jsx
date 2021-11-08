import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';

import './style.css'
import { useAssetImportForm } from '../../../contexts/components/assets/import';

export default function AssetImportForm() {
    const [onChangeFile, assets, removeAsset, importAssetToApi] = useAssetImportForm()

    return (
        <>
            <Grid container spacing={3} justifyContent="flex-end">
                <Grid item xs={12}>
                    <Alert variant="filled" severity="info">
                        Você está realizando a importação de ativos do Excel, você deverá utilizar uma planilha de acordo com o padrões abaixo<br />
                        <ul>
                            <li>A primeira linha (titulo) será ignorada</li>
                            <li>A primeira coluna será o nome</li>
                            <li>O campo nome deve conter entre 3 e 50 caracteres</li>
                            <li>A segunda coluna será o RE</li>
                            <li>O Campo RE não pode ser nulo e só deve conter números</li>
                            <li>A terceira coluna será o Departamento</li>
                            <li>O campo departamento deve conter entre 1 e 50 caracteres</li>
                            <li>A quinta coluna será o status</li>
                            <li>O campo status deve conter um dos seguintes status 'ACTIVE', 'INACTIVE', 'LICENSE'</li>

                            <li><strong>As linhas em vermelho (com erro) não serão importadas</strong></li>
                        </ul>               
                    </Alert>
                </Grid>
                <Grid item>
                    <input
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        id="contained-button-file"
                        type="file" 
                        onChange={onChangeFile}/>
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span">
                            Carregar Arquivo do Excel
                        </Button>
                    </label>
                </Grid>
                <Grid item>
                    <Button 
                        disabled={ assets && assets.length === 0 }
                        variant="contained" 
                        color="primary" 
                        onClick={importAssetToApi}>
                        Importar dados para o sistema
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <AssetDataTable data={ assets } deleteLine={ removeAsset }/>
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
                        <TableCell>Responsável</TableCell>
                        <TableCell>Localização</TableCell>
                        <TableCell>Modelo</TableCell>
                        <TableCell>Identificação</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Chip ID</TableCell>
                        <TableCell>Linha</TableCell>
                        <TableCell>Contrato Num</TableCell>
                        <TableCell>Fornecedor</TableCell>
                        <TableCell>Forn. CNPJ</TableCell>
                        <TableCell>Contr. Começa em</TableCell>
                        <TableCell>Contr. Termina em</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data ? data.map((row, index) => (
                        <TableRow key={index} style={row && row.errors && row.errors.length ? {background: '#FF7F7F'} : null}>
                            <TableCell component="th" scope="row">
                                {row.owner.name ? row.owner.name : row.owner.re}
                            </TableCell>
                            <TableCell align="right">{row.location.title}</TableCell>
                            <TableCell align="right">{row.model.title}</TableCell>
                            <TableCell align="right">{row.companyIdentification}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.chipIdentification}</TableCell>
                            <TableCell align="right">{row.lineIdentification}</TableCell>
                            <TableCell align="right">{row.contract.number}</TableCell>
                            <TableCell align="right">{row.contract.vendor}</TableCell>
                            <TableCell align="right">{row.contract.vendorCNPJ}</TableCell>
                            <TableCell align="right">{row.contract.startsAt}</TableCell>
                            <TableCell align="right">{row.contract.endsAt}</TableCell>


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
