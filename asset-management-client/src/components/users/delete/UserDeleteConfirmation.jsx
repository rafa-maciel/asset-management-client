import { Button, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'

import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';
import { useUserFormDeleteConfirmation } from '../../../contexts/components/users/delete';

export default function UserDeleteConfirmation({ user, onDelete }) {
    const [userDelete] = useUserFormDeleteConfirmation( user ? user.id : 0, onDelete)

    const handleFormSubmit = e => {
        e.preventDefault()
        userDelete(user.id, onDelete)
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover o usuário [{ user ? user.name : '#Error'}]? <br />
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
                            Deletar Usuário
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        component={ Link }
                        to={{
                            pathname: "/users",
                            status: {
                                'message' : {
                                    'type': 'info',
                                    'title': 'Deleção Cancelada',
                                    'message': 'A ação foi cancelada e o usuário não foi deletada'
                                }
                            }
                            }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<RestoreIcon />}>
                            Voltar para lista de usuários
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}