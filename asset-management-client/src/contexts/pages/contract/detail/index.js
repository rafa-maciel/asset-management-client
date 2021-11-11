import { useEffect, useState } from "react";
import { findContractByAsset } from "../../../../adapters/contract";

function useContractDetailPageContext(assetId) {
    const [contract, setContract] = useState(null)
    const [pageMode, setPageMode] = useState(0)

    const isModeCreation = () => { return pageMode === 1 }
    const isModeEdition = () => { return pageMode === 2}
    const isModeDeletion = () => { return pageMode === 3}
    const setCreationMode = () => { setPageMode(1) }
    const setEditionMode = () => { setPageMode(2) }
    const setDeletionMode = () => { setPageMode(3) }
    const setDefaultMode = () => { setPageMode(0) }


    useEffect(() => {
        if (assetId) {
            findContractByAsset(assetId)
                .then(contractResp => setContract(contractResp))
        }
    }, [ assetId ])

    return [ contract, setContract, isModeCreation, isModeEdition, isModeDeletion, setCreationMode, setEditionMode, setDeletionMode, setDefaultMode ]
}

export { useContractDetailPageContext }