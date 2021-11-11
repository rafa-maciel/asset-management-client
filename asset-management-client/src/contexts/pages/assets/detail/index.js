import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { findAsset } from "../../../../adapters/assets";

function useAssetDetailPageContext() {
    const [ asset, setAsset ] = useState(null)
    const { state: {assetId} } = useLocation()
    const [ tabIndex, setTabIndex ] = useState(0)

    useEffect(() => {
        if (assetId) {
            findAsset(assetId)
                .then(assetResp => setAsset(assetResp))
        }
    }, [ assetId ])

    

    return [ asset, tabIndex, setTabIndex ]
}

export { useAssetDetailPageContext }