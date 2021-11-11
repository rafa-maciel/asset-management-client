import { useEffect, useState } from "react";
import { deleteContract, findContractByAsset } from "../../../../adapters/contract";

function useContractDeleteContext( assetId ) {
    const [id, setId] = useState(null)

    useEffect(() => {
        if (assetId) {
            findContractByAsset(assetId)
                .then(contract => setId(contract.id))
        }
    }, [ assetId ])

    const doDeleteContract = cb => {
        deleteContract(assetId, id)
            .then(resp => {
                console.log(resp)
                cb()
            });
    }

    return [ doDeleteContract ]
}

export { useContractDeleteContext }