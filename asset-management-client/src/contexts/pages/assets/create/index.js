import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createNewAsset } from "../../../../adapters/assets"
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors"

function useAssetCreatePageContext() {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const onSuccessCreated = asset => {
        var message = {
            'type': 'success',
            'title': 'Ativo Criado',
            'message': 'O Ativo de identificação [ ' + asset.companyIdentification + ' ] foi criado com sucesso'
        }

        history.push({
            pathname: '/assets',
            state: { message }
        })
    }

    const createAsset = (assetData) => {
        createNewAsset(assetData)
                .then(asset => onSuccessCreated(asset))
                .catch(error => handleBadRequestError(error, setApiErrors))
    }



    return [ createAsset, apiErrors ]
}

export { useAssetCreatePageContext }