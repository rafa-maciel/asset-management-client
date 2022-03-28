import { Grid, TextField } from '@material-ui/core'
import React from 'react'

export default function ContractInfo({ contract }) {

    return (
        <>
            { contract ? 
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <ContractDefaultField label="Número" value={ contract.number } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContractDefaultField label="Fornecedor" value={ contract.vendor } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContractDefaultField label="CNPJ do Fornecedor" value={ contract.vendorCNPJ } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContractDefaultField label="Começa Em" value={ contract.startsAt } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ContractDefaultField label="Termina Em" value={ contract.endsAt } />
                    </Grid>
                </Grid> : null }
        </>
    )
    
}

function ContractDefaultField({ label, value }) {
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