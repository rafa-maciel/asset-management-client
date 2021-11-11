import React, { useState } from 'react'
import { Button, Grid, TextField } from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save';
import { createNewNote } from '../../../adapters/notes';

export default function NoteCreateForm({ assetId, onCreate }) {
    const [ text, setText ] = useState("")

    const handleFormSubmit = event => {
        event.preventDefault();
        var data = {
            text
        }

        createNewNote(assetId, data)
            .then(noteData => {
                setText("")
                onCreate(noteData)
            })
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={10}>
                        <TextField
                            label="Texto"
                            value={ text }
                            onChange={ e => setText(e.target.value) }
                            multiline
                            rows={6}
                            required
                            fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Button type="submit"
                            fullWidth
                            size="large"
                            variant="contained"
                            color="primary"
                            startIcon={ <SaveIcon /> }>
                                Salvar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}