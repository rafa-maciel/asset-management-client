import { Button, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { useUserImportForm } from '../../../contexts/components/users/import'

import DeleteIcon from '@material-ui/icons/Delete';

import './style.css'

export default function UserImportForm() {
    const [onChangeFile, users, removeUser, importUsersToApi] = useUserImportForm()

    return (
        <>
            <Grid container spacing={3} justifyContent="flex-end">
                <Grid item xs={12}>
                    <Alert variant="filled" severity="info">
                        Você está realizando a importação de usuários do Excel, você deverá utilizar uma planilha de acordo com o padrões abaixo<br />
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
                        disabled={ users && users.length === 0 }
                        variant="contained" 
                        color="primary" 
                        onClick={importUsersToApi}>
                        Importar dados para o sistema
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <UserDataTable data={ users } deleteLine={ removeUser }/>
                </Grid>
            </Grid>
            
        </>
    )
}

function UserDataTable({ data, deleteLine }) {
    return (
        <TableContainer>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>RE</TableCell>
                        <TableCell>Departamento</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Erros</TableCell>
                        <TableCell>Remover Linha</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data ? data.map((row, index) => (
                        <TableRow key={index} style={row.errors.length ? {background: '#FF7F7F'} : null}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.re}</TableCell>
                            <TableCell align="right">{row.department}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
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
