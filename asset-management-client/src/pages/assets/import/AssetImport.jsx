import React from 'react'
import { Typography } from '@material-ui/core'
import { AssetImportForm } from '../../../components/assets/import'

export default function AssetImport() {
    
    return (
        <>
            <Typography variant="h3" component="h1">Importar Ativos do Excel</Typography>
            <AssetImportForm />
        </>
    )
}