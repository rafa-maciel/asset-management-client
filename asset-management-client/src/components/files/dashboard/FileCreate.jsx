import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

import SaveIcon from '@material-ui/icons/Save';
import { createNewFile } from '../../../adapters/files';

export default function FileCreate({ assetId=null, contractId=null, invoiceId=null, onCreate }) {
    const handleSubmit = event => {
        event.preventDefault()
        var data = new FormData(event.target)
        createNewFile(data)
            .then(fileSaved => onCreate(fileSaved))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name='assetId' value={ assetId } type="hidden" />
                <input name='contractId' value={ contractId } type="hidden" />
                <input name='invoiceId' value={ invoiceId } type="hidden" />

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Nome"
                            name="name"
                            required
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Comentários"
                            name="note"
                            required
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <input
                            id="contained-button-file"
                            name="file"
                            type="file" />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="secondary" component="span">
                                Carregar Arquivo
                            </Button>
                        </label>
                    </Grid>

                    <Button type="submit"
                        fullWidth
                        size="medium"
                        variant="contained"
                        color="primary"
                        startIcon={ <SaveIcon /> }>
                            Salvar
                    </Button>
                </Grid>
            </form>
        </>
    )
}