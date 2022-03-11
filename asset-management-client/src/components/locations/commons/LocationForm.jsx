
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button, Grid } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import RestoreIcon from '@material-ui/icons/Restore';

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import { FormTextField } from '../../commons/forms/fields/FormFields';
import { locationSchema } from './validation';

import "./styles/locationFormStyle.css"

export default function LocationForm({ onSubmit, initialData={} }) {
    const { handleSubmit, control, setValue  } = useForm({
        resolver: yupResolver(locationSchema)
    });

    useEffect(() => {
        if (initialData) {
            Object.entries(initialData).forEach(([key, value]) => { setValue(key, value) })
        }
    }, [ initialData ])

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } name="title" label="Localização" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } name="address" label="Endereço" />
                    </Grid>
                    
                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Button type="submit"
                                    className="location-save-btn"
                                    size="medium"
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