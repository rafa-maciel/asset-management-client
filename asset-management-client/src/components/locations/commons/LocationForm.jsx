import { Button, Grid } from '@material-ui/core';
import React from 'react'
import { useFormInvalidCheck } from '../../../contexts/commons/useFormsUtils';
import { LocationNotesField, LocationTitleField } from './LocationFormFields';
import { Link } from 'react-router-dom'

import SaveIcon from '@material-ui/icons/Save';
import RestoreIcon from '@material-ui/icons/Restore';

import "./styles/locationFormStyle.css"

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
                    
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Button type="submit"
                                    className="location-save-btn"
                                    size="medium"
                                    disabled={ invalidForm }
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    startIcon={ <SaveIcon /> }>
                                        Salvar
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                    fullWidth
                                    component={ Link }
                                    to={{
                                        pathname: "/locations",
                                        status: {
                                            'message' : {
                                                'type': 'info',
                                                'title': 'Criação Cancelada',
                                                'message': 'A ação foi cancelada e a localização não foi criada'
                                            }
                                        }
                                        }}
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<RestoreIcon />}>
                                        Cancelar
                                </Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}