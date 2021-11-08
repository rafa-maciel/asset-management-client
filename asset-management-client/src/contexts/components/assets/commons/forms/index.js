import { useEffect, useState } from "react"
import * as Fields from "../../../../../components/assets/commons/AssetFormFields"
import { useFormInvalidCheck } from "../../../../commons/useFormsUtils"

function useAssetFormContext(initialData) {
    const [ownerId, setOwnerId] = useState('')
    const [companyIdentification, setCompanyIdentification] = useState('')
    const [modelId, setModelId] = useState('')
    const [locationId, setLocationId] = useState('')
    const [status, setStatus] = useState('')
    const [chipIdentification, setChipIdentification] = useState('')
    const [lineIdentification, setLineIdentification] = useState('')
        
    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()

    useEffect(() => {
        if ( initialData ) {
            setOwnerId(initialData.owner.id)
            setCompanyIdentification(initialData.companyIdentification)
            setModelId(initialData.model.id)
            setLocationId(initialData.location.id)
            setStatus(initialData.status)
            setChipIdentification(initialData.chipIdentification)
            setLineIdentification(initialData.lineIdentification)
        }
    }, [ initialData ])

    const assetFields = () => {
        return [
            <Fields.AssetOwnerField ownerId={ownerId} onChange={setOwnerId} />,
            <Fields.AssetLocationField locationId={locationId} onChange={ setLocationId } />,
            <Fields.AssetModelField modelId={modelId} onChange={ setModelId } />,
            <Fields.AssetCompanyIdentificationField
                companyIdentification={ companyIdentification }
                onChange={ setCompanyIdentification }
                onValidChange={ v => checkInvalidField(v, 'companyIdentification') } />,
            <Fields.AssetStatusField
                status={ status }
                onChange={ setStatus } />,
            <Fields.AssetChipIdentificationField 
                chipIdentification={ chipIdentification }
                onChange={ setChipIdentification } />,
            <Fields.AssetLineIdentificationField 
                lineIdentification={ lineIdentification }
                onChange={ setLineIdentification } />
        ]
    }

    const validData = () => {
        if (!invalidForm) {
            return {
                ownerId,
                locationId,
                modelId,
                companyIdentification,
                status,
                chipIdentification,
                lineIdentification
            }
        }
        return null
    }

    return [ assetFields, validData ] 
}

export { useAssetFormContext }