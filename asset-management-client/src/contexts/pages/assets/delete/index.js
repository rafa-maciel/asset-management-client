import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { findAsset } from "../../../../adapters/assets"

function useAssetDeletePageContext() {
    const { state: { id: assetId }} = useLocation()
    const [asset, setAsset] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if ( assetId )
            findAsset(assetId)
                .then(data => setAsset(data))
         
    }, [ assetId ])

    const onAssetDeleted = () => {
        var message = {
            'type': 'success',
            'title': 'Ativo Deletado!',
            'message': 'O Ativo [ ' + asset.companyIdentification  + ' ] foi deletado com sucesso'
        }

        history.push({
            pathname: '/assets',
            state: { message }
        })
    }

    return [ asset, onAssetDeleted ]
}

export { useAssetDeletePageContext }