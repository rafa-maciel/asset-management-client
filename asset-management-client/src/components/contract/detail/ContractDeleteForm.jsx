import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { useContractDeleteContext } from '../../../contexts/components/contract/delete'
import { Alert } from '@material-ui/lab'

import DeleteIcon from '@material-ui/icons/Delete';

export default function ContractDeleteForm({ assetId, onDelete }) {
    const [ doDeleteContract ] = useContractDeleteContext(assetId)

    const handleFormSubmit = e => {
        e.preventDefault()
        doDeleteContract(onDelete)
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover o contracto? <br />
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
                            Deletar Contrato
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </>
    )
}