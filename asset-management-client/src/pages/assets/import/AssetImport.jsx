import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { AssetImportForm } from '../../../components/assets/import'

export default function AssetImport() {
    
    return (
        <Paper>
            <Typography variant="h3" component="h1">Importar Ativos do Excel</Typography>
            <AssetImportForm />
        </Paper>
    )
}