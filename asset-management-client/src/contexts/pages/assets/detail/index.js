import { Typography } from "@material-ui/core";
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

    const tabContent = () => {
        switch (tabIndex) {        
            case 1:
                return <Typography variant="h6">Contrato</Typography>
                            
            case 2:
                return <Typography variant="h6">Arquivos</Typography>

            default:
                return <Typography variant="h6">Comentários</Typography>;
        }
    }    
    

    return [ asset, tabIndex, setTabIndex, tabContent ]
}

export { useAssetDetailPageContext }