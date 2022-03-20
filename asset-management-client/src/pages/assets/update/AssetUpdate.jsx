import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { AssetForm } from '../../../components/assets/commons'
import { AssetUpdateForm } from '../../../components/assets/update'
import { useAssetUpdatePageContext } from '../../../contexts/pages/assets/update'

export default function AssetUpdate() {
    const [ asset, updateAsset, apiErrors ] = useAssetUpdatePageContext()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Atualizar Ativo</Typography>
            <AssetForm onSubmit={ updateAsset } initialData={ asset } saveErrors={apiErrors} />
        </Paper>
    ) 
}