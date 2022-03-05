import { Button, CircularProgress, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { useUserImportForm } from '../../../contexts/components/users/import'

import DeleteIcon from '@material-ui/icons/Delete';

import './style.css'

export default function UserImportForm() {
    const [onChangeFile, users, removeUser, importUsersToApi, loading] = useUserImportForm()

    const ActionImportButton = () => {
        if (loading) {
            return <CircularProgress />
        } else if ( users && users.length > 0 ) {
            return (
                <Button 
                    disabled={ users && users.length === 0 }
                    variant="contained" 
                    color="primary" 
                    onClick={importUsersToApi}>
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
                        onChange={onChangeFile}/>
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
                        <a href="/files/importar_usuarios_exemplo.xlsx">Baixar planilha modelo</a>
                    </Alert>
                </Grid>
                <Grid item>
                    <ActionImportButton />
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
