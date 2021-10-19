import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useModelDeleteConfirmationContext } from '../../../contexts/components/models/delete'
import { Alert } from '@material-ui/lab'

import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';

export default function ModelDeleteConfirmation({ model, onDelete }) {
    const [ modelDelete ] = useModelDeleteConfirmationContext()

    const handleFormSubmit = e => {
        e.preventDefault()
        modelDelete(model.id, onDelete)
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover o modelo de ativo [{ model ? model.title : '#Error'}]? <br />
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
                            Deletar Modelo de Ativo
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        component={ Link }
                        to={{
                            pathname: "/models",
                            status: {
                                'message' : {
                                    'type': 'info',
                                    'title': 'Deleção Cancelada',
                                    'message': 'A ação foi cancelada e o modelo de ativo não foi deletado'
                                }
                            }
                            }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<RestoreIcon />}>
                            Voltar para lista de modelos
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}