import { useEffect, useState } from "react";
import { updateContract } from "../../../../adapters/contract";

function useContractUpdateFormContext(initialData, contractId) {
    const [number, setNumber] = useState('')
    const [vendor, setVendor] = useState('')
    const [vendorCNPJ, setVendorCNPJ] = useState('')
    const [startsAt, setStartsAt] = useState('')
    const [endsAt, setEndsAt] = useState('')

    useEffect(() => {
        if ( initialData ) {
            setNumber(initialData.number)
            setVendor(initialData.vendor)
            setVendorCNPJ(initialData.vendorCNPJ)
            setStartsAt(initialData.startsAt)
            setEndsAt(initialData.endsAt)
        }
    }, [ initialData ])

    const contractUpdate = callback => {
        var data = {
            number,
            vendor,
            vendorCNPJ,
            startsAt,
            endsAt
        }

        updateContract(contractId, data)
            .then(contract => callback(contract))
    }

    return [ number, setNumber, vendor, setVendor, vendorCNPJ, setVendorCNPJ, startsAt, setStartsAt, endsAt, setEndsAt, contractUpdate ]    
}

export { useContractUpdateFormContext }