import React from 'react'
import { createNewAsset } from '../../../adapters/assets'
import { AssetForm } from '../commons'


export default function AssetCreateForm({ onCreate }) {
    const createAsset = data => {
        if (data) {
            createNewAsset(data)
                .then(asset => onCreate(asset))
        }
    }

    return (
        <AssetForm onValidFormSubmit={ createAsset } />
    )
}