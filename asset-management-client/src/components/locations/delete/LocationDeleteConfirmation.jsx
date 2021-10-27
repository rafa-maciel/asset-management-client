import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useLocationDeleteConfirmationContext } from '../../../contexts/components/locations/delete'
import { Alert } from '@material-ui/lab'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

export default function LocationDeleteConfirmation({ location, onDelete }) {
    const [ locationDelete ] = useLocationDeleteConfirmationContext()

    const handleFormSubmit = e => {
        e.preventDefault()
        locationDelete(location.id, onDelete)
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover o localização [{ location ? location.title : '#Error'}]? <br />
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
                            Deletar Localização
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        component={ Link }
                        to={{
                            pathname: "/locations",
                            status: {
                                'message' : {
                                    'type': 'info',
                                    'title': 'Deleção Cancelada',
                                    'message': 'A ação foi cancelada e a localização não foi deletada'
                                }
                            }
                            }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<RestoreIcon />}>
                            Voltar para lista de localizações
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}