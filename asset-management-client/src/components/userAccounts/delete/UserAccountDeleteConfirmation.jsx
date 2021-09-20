import { Button, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

export default function UserAccountDeleteConfirmation({ email, onConfirm }) {

    const handleFormSubmit = e => {
        e.preventDefault()
        onConfirm()
    }

    return (
        <>

            <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover a conta de acesso [{ email }]? <br />
                        <Typography component="small" variant="caption">Esta ação não poderá ser desfeita.</Typography>                
                    </Alert>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={ handleFormSubmit }>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}>
                            Deletar Conta de Acesso
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        component={ Link }
                        to={{
                            pathname: "/accounts",
                            status: {
                                'message' : {
                                    'type': 'info',
                                    'title': 'Deleção Cancelada',
                                    'message': 'A ação foi cancelada e a conta de acesso não foi deletada'
                                }
                            }
                            }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<RestoreIcon />}>
                            Voltar Para Lista de Contas
                    </Button>
                </Grid>
            </Grid>
            

            


            
            

            
        </>
    )
}