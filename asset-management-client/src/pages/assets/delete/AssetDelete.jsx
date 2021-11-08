import React from 'react'
import { Typography } from '@material-ui/core'
import { useAssetDeletePageContext } from '../../../contexts/pages/assets/delete'
import { AssetDeleteConfirmation } from '../../../components/assets/delete'

export default function AssetDelete() {
    const [ asset, onAssetDeleted ] = useAssetDeletePageContext()

    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Deletar Ativo
            </Typography>

            <AssetDeleteConfirmation
                asset={ asset }
                onDelete={ onAssetDeleted } />
        </>
    )
}