import React from 'react'
import { Button, Grid } from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save';
import { useInvoiceFormContext } from '../../../contexts/components/invoices/commons';


export default function InvoiceForm({ readonly, initialData, onSubmit }) {
    const [ dataSubmitted, fields ] = useInvoiceFormContext(readonly, initialData)

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit( dataSubmitted() )
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={3}>

                    { fields.map((field, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            { field }
                        </Grid>                    
                    ))}

                    { readonly ? null : 
                        <Grid item>
                            <Button type="submit"
                                fullWidth
                                size="medium"
                                variant="contained"
                                color="primary"
                                startIcon={ <SaveIcon /> }>
                                    Salvar
                            </Button>
                        </Grid>
                    }
                </Grid>
            </form>
        </>
    )
}