import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useAssetDeleteConfirmationContext } from '../../../contexts/components/assets/delete'

import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';

export default function AssetDeleteConfirmation({ asset, onDelete }) {
    const [ assetDelete ] = useAssetDeleteConfirmationContext()

    const handleFormSubmit = e => {
        e.preventDefault()
        assetDelete(asset.id, onDelete)
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover o Ativo [{ asset ? asset.companyIdentification : '#Error'}]? <br />
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
                            Deletar Ativo
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        component={ Link }
                        to={{
                            pathname: "/assets",
                            status: {
                                'message' : {
                                    'type': 'info',
                                    'title': 'Deleção Cancelada',
                                    'message': 'A ação foi cancelada e o Ativo não foi deletado'
                                }
                            }
                            }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<RestoreIcon />}>
                            Voltar para lista de ativos
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}