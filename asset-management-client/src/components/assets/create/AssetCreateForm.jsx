import React, { useState } from 'react'
import { useAssetCreate } from '../../../contexts/components/assets/create'
import { AssetForm } from '../commons'


export default function AssetCreateForm({ onCreate }) {
    const [ownerId, setOwnerId] = useState('')
    const [companyIdentification, setCompanyIdentification] = useState('')
    const [modelId, setModelId] = useState('')
    const [locationId, setLocationId] = useState('')
    const [status, setStatus] = useState('')
    const [chipIdentification, setChipIdentification] = useState('')
    const [lineIdentification, setLineIdentification] = useState('')

    const [ createAsset ] = useAssetCreate(ownerId, companyIdentification, 
        modelId, locationId, status, chipIdentification, lineIdentification)

    return (
        <AssetForm onValidFormSubmit={ () => createAsset(onCreate) } 
            ownerId={ ownerId }
            onChangeOwnerId={ setOwnerId}
            companyIdentification={ companyIdentification }
            onChangeCompanyIdentification={ setCompanyIdentification }
            modelId={ modelId }
            onChangeModelId={ setModelId }
            locationId={ locationId }
            onChangeLocationId={ setLocationId }
            status={ status }
            onChangeStatus={ setStatus }
            chipIdentification={ chipIdentification }
            onChangeChipIdentification={ setChipIdentification }
            lineIdentification={ lineIdentification }
            onChangeLineIdentification={ setLineIdentification } />
    )
}