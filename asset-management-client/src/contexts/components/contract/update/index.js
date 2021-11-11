import { useEffect, useState } from "react"
import { findContractByAsset } from "../../../../adapters/contract"

function useContractUpdateForm( assetId ) {
    const [ contract, setContract ] = useState(null)

    useEffect(() => {
        if ( assetId ) {
            findContractByAsset(assetId)
                .then(contractData => setContract(contractData))
        }
    }, [ assetId ])

    return [ contract ]
}

export { useContractUpdateForm }