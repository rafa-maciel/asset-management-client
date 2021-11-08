import React from 'react'
import { useAssetUpdateFormContext } from '../../../contexts/components/assets/update'
import { AssetForm } from '../commons'


export default function AssetUpdateForm({ assetId, onUpdate }) {
    const [ asset, assetUpdate ] = useAssetUpdateFormContext( assetId )

    return (
        <AssetForm 
            initialData={ asset }
            onValidFormSubmit={ data => assetUpdate(data, onUpdate)} />

    )
}