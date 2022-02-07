import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { ModelBrandField, ModelTitleField, ModelTypeField } from '../fields'

import SaveIcon from '@material-ui/icons/Save';
import { useFormInvalidCheck } from '../../../../contexts/commons/useFormsUtils';
import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';

export default function ModelForm({ onValidFormSubmit, title, onChangeTitle, brand, onChangeBrand, type, onChangeType }) {
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
                       <ModelTitleField
                            onValidChange={ v => checkInvalidField(v, 'title') }
                            title={ title }
                            onChange={ onChangeTitle } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ModelBrandField 
                            onValidChange={ v => checkInvalidField(v, 'brand') }
                            brand={ brand }
                            onChange={ onChangeBrand } />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ModelTypeField 
                            type={ type }
                            onValidChange={ v => checkInvalidField(v, 'type') }
                            onChange={ onChangeType }/>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
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
        </>
    )
}