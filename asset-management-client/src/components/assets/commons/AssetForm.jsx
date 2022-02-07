import { Button, Grid } from '@material-ui/core';
import React from 'react'

import SaveIcon from '@material-ui/icons/Save';
import { useAssetFormContext } from '../../../contexts/components/assets/commons/forms';

import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';


export default function AssetForm({ onValidFormSubmit, initialData }) {
    const [ fields, validData ] = useAssetFormContext(initialData)
    
    const handleSubmit = e => {
        e.preventDefault()
        var data = validData()
        if (data)
            onValidFormSubmit(data)
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={3}>
                    { fields().map(field => <Grid item xs={12} sm={6}>{ field }</Grid>) }

                    <Grid item sm={12}>
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
                                        pathname: "/assets",
                                        status: {
                                            'message' : {
                                                'type': 'info',
                                                'title': 'Criação Cancelada',
                                                'message': 'A ação foi cancelada e o Ativo não foi criado'
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
                </Grid>
            </form>
        </>
    )
}