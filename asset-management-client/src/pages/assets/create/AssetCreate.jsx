import { Typography } from '@material-ui/core';
import React from 'react'
import { AssetCreateForm } from '../../../components/assets/create';
import { useAssetCreatePageContext } from '../../../contexts/pages/assets/create';

export default function AssetCreate() {
    const [ onAssetCreate ] = useAssetCreatePageContext();

    return (
        <>
            <Typography variant="h3" component="h1">Criar Ativo</Typography>
            <AssetCreateForm onCreate={ onAssetCreate }/>
        </>
    )
}