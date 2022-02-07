import { useHistory, useLocation } from "react-router-dom";

function useAssetUpdatePageContext() {
    const { state: {id: assetId} } = useLocation()
    const history = useHistory()

    const onAssetUpdated = asset => {
        var message = {
            'type': 'success',
            'title': 'Ativo Atualizado!',
            'message': ' o Ativo [ ' + asset.companyIdentification  + ' ] foi atualizado com sucesso'
        }

        history.push({
            pathname: '/assets',
            state: { message }
        })
    }

    return [ assetId, onAssetUpdated ]
}

export { useAssetUpdatePageContext }