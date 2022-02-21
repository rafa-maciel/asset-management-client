import { Button, Dialog, DialogContent, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import { deleteFile } from '../../../adapters/files';

export default function FileDelete({ file, showDialog, onCloseDialog, onDelete }) {

    const handleFormSubmit = event => {
        event.preventDefault()
        deleteFile(file.id)
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
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
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
                                <Grid item xs={12} md={6}>
                                    <Button
                                        fullWidth
                                        type="button"
                                        variant="contained"
                                        color="primary"
                                        onClick={() => onCloseDialog()}
                                        startIcon={<RestoreIcon />}>
                                        Cancelar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}