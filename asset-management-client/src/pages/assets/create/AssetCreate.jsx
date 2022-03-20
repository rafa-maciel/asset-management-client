import { Paper, Typography } from '@material-ui/core';
import React from 'react'
import { AssetForm } from '../../../components/assets/commons';
import { useAssetCreatePageContext } from '../../../contexts/pages/assets/create';

export default function AssetCreate() {
    const [ createAsset, apiErrors ] = useAssetCreatePageContext();

    return (
        <Paper>
            <Typography variant="h3" component="h1">Criar Ativo</Typography>
            <AssetForm onSubmit={ createAsset } saveErrors={ apiErrors } />
        </Paper>
    )
}