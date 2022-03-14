import { Button, Grid } from '@material-ui/core'
import React from 'react'

import SaveIcon from '@material-ui/icons/Save';

import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';
import { modelSchema } from '../validation'
import { useCustomForm } from '../../../commons/forms/useCustomForm';
import { FormTextField } from '../../../commons/forms/fields/FormFields';

export default function ModelForm({ onSubmit, initialData={}, saveErrors }) {
    const [ handleSubmit, control ] = useCustomForm(modelSchema, initialData, saveErrors);

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormTextField control={ control } name="title" label="Modelo" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormTextField control={ control } name="brand" label="Marca" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormTextField control={ control } name="type" label="Tipo" />
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Button type="submit"
                            fullWidth
                            size="medium"
                            variant="contained"
                            color="primary"
                            startIcon={ <SaveIcon /> }>
                                Salvar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            component={ Link }
                            to={{
                                pathname: "/models",
                                status: {
                                    'message' : {
                                        'type': 'info',
                                        'title': 'Criaçaõ Cancelada',
                                        'message': 'A ação foi cancelada e o modelo de ativo não foi criado'
                                    }
                                }
                                }}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            startIcon={<RestoreIcon />}>
                                Cancelar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}