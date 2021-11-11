import { Button, Dialog, DialogContent, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteFile } from '../../../adapters/files';

export default function FileDelete({ file, assetId, showDialog, onCloseDialog, onDelete }) {

    const handleFormSubmit = event => {
        event.preventDefault()
        deleteFile(assetId, file.id)
        onDelete(file)
    }

    return (
        <>
            <Dialog open={ showDialog } onClose={ onCloseDialog }>
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Alert variant="filled" severity="warning">
                                Você tem certeza que deseja remover o arquivo? <br />
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
                                    Deletar Arquivo
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}