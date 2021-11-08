import { Button, Grid } from '@material-ui/core';
import React from 'react'

import SaveIcon from '@material-ui/icons/Save';
import { useAssetFormContext } from '../../../contexts/components/assets/commons/forms';


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

                    <Grid item xs={12} sm={12}>
                        <Button type="submit"
                            fullWidth
                            size="medium"
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