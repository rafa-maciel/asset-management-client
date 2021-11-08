import { Typography } from '@material-ui/core'
import React from 'react'
import { AssetUpdateForm } from '../../../components/assets/update'
import { useAssetUpdatePageContext } from '../../../contexts/pages/assets/update'

export default function AssetUpdate() {
    const [ assetId, onAssetUpdated ] = useAssetUpdatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Ativo</Typography>
            <AssetUpdateForm 
                assetId={ assetId }
                onUpdate={ onAssetUpdated }/>
        </>
    ) 
}