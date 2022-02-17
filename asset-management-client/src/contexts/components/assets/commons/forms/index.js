import { useEffect, useState } from "react"
import * as Fields from "../../../../../components/assets/commons/AssetFormFields"
import { useFormInvalidCheck } from "../../../../commons/useFormsUtils"

function useAssetFormContext(initialData, readOnly=false) {
    const [ownerId, setOwnerId]=  useState('')
    const [companyIdentification, setCompanyIdentification] = useState('')
    const [modelId, setModelId] = useState('')
    const [locationId, setLocationId] = useState('')
    const [status, setStatus] = useState('')
    const [chipIdentification, setChipIdentification] = useState('')
    const [lineIdentification, setLineIdentification] = useState('')

    const [ contractId, setContractId ] = useState('')
    const [ invoiceId, setInvoiceId ] = useState('')
    const [ hostname, setHostname ] = useState('')
    const [ serialNumber, setSerialNumber ] = useState('')
    const [ tag, setTag] = useState('')
    const [ imei, setImei ] = useState('')

        
    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()

    useEffect(() => {
        if ( initialData ) {
            setOwnerId(initialData.owner ? initialData.owner.id : null )
            setCompanyIdentification(initialData.companyIdentification)
            setModelId(initialData.model ? initialData.model.id : null)
            setLocationId(initialData.location ? initialData.location.id : null)
            setStatus(initialData.status)
            setChipIdentification(initialData.chipIdentification)
            setLineIdentification(initialData.lineIdentification)
            setContractId(initialData.contract ? initialData.contract.id : null)
            setInvoiceId(initialData.invoice ? initialData.invoice.id : null)
            setHostname(initialData.hostname)
            setSerialNumber(initialData.serialNumber)
            setTag(initialData.tag)
            setImei(initialData.imei)
        }
    }, [ initialData ])

    const assetFields = () => {
        return [
            <Fields.AssetHostnameField hostname={hostname} onChange={ setHostname } readOnly={readOnly} />,
            <Fields.AssetTagField tag={ tag } onChange={ setTag } readOnly={readOnly} />,
            <Fields.AssetSerialNumberField serialNumber={ serialNumber } onChange={ setSerialNumber } readOnly={readOnly} />,
            <Fields.AssetCompanyIdentificationField
                companyIdentification={ companyIdentification }
                onChange={ setCompanyIdentification }
                onValidChange={ v => checkInvalidField(v, 'companyIdentification') }
                readOnly={readOnly} />,
            <Fields.AssetImeiField imei={ imei } onChange={ setImei } readOnly={readOnly} />,
            <Fields.AssetChipIdentificationField 
                chipIdentification={ chipIdentification }
                onChange={ setChipIdentification }
                readOnly={readOnly} />,
            <Fields.AssetLineIdentificationField 
                lineIdentification={ lineIdentification }
                onChange={ setLineIdentification }
                readOnly={readOnly} />,
            <Fields.AssetModelField modelId={modelId} onChange={ setModelId }
                readOnly={readOnly} />,
            <Fields.AssetOwnerField ownerId={ownerId} onChange={setOwnerId} readOnly={readOnly} />,
            <Fields.AssetLocationField locationId={locationId} onChange={ setLocationId } readOnly={readOnly} />,
            <Fields.AssetInvoiceField invoiceId={ invoiceId } onChange={ setInvoiceId } readOnly={readOnly} />,
            <Fields.AssetContractField contractId={contractId} onChange={ setContractId } readOnly={readOnly} />,
            <Fields.AssetStatusField
                status={ status }
                onChange={ setStatus }
                readOnly={readOnly} />,
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
                lineIdentification,
                contractId,
                invoiceId,
                hostname,
                serialNumber,
                tag,
                imei
            }
        }
        return null
    }

    return [ assetFields, validData ] 
}

export { useAssetFormContext }  