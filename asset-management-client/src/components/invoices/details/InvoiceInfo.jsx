import { Grid, TextField } from '@material-ui/core'
import React from 'react'

export default function InvoiceInfo({ invoice }) {

    return (
        <>
            { invoice ? 
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <InvoiceDefaultField label="Número" value={ invoice.number } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InvoiceDefaultField label="Fornecedor" value={ invoice.vendor } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InvoiceDefaultField label="CNPJ do Fornecedor" value={ invoice.vendorCNPJ } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InvoiceDefaultField label="Data de Emissão" value={ invoice.date } />
                    </Grid>
                </Grid> : null }
        </>
    )
    
}

function InvoiceDefaultField({ label, value }) {
    return (
        <TextField
            label={ label }
            defaultValue={ value }
            InputProps={{
                readOnly: true,
            }}
            fullWidth
            InputLabelProps={{ shrink: true }}
            />
    )
}