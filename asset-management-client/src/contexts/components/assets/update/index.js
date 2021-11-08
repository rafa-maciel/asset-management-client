import { useEffect, useState } from "react";
import { updateAsset, findAsset } from "../../../../adapters/assets";

function useAssetUpdateFormContext(assetId) {
    const [ asset, setAsset ] = useState(null)

    useEffect(() => {
        if ( assetId ) {
            findAsset(assetId)
                .then(data => setAsset(data))
        }
    }, [ assetId ])

    const assetUpdate = (data, cb) => {
        updateAsset(assetId, data)
            .then(assetSaved => cb(assetSaved))
    }

    return [ asset, assetUpdate ]    
}

export { useAssetUpdateFormContext }