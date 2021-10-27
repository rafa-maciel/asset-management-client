import { Button, Grid } from '@material-ui/core';
import React from 'react'
import { useFormInvalidCheck } from '../../../contexts/commons/useFormsUtils';
import { LocationNotesField, LocationTitleField } from './LocationFormFields';

import SaveIcon from '@material-ui/icons/Save';

export default function LocationForm({ onValidFormSubmit, title, onChangeTitle, notes, onChangeNotes }) {
    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()

    const handleSubmit = e => {
        e.preventDefault()
        if (!invalidForm)
            onValidFormSubmit()
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                       <LocationTitleField
                            onValidChange={ v => checkInvalidField(v, 'title') }
                            title={ title }
                            onChange={ onChangeTitle } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LocationNotesField 
                            onValidChange={ v => checkInvalidField(v, 'notes') }
                            notes={ notes }
                            onChange={ onChangeNotes } />

                    </Grid>
                    
                    <Grid item>
                        <Button type="submit"
                            fullWidth
                            size="medium"
                            disabled={ invalidForm }
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