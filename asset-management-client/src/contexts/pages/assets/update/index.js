import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findAsset, updateAsset } from "../../../../adapters/assets";
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors";
import { dateFormat } from "../../../../utils/conversors";

function useAssetUpdatePageContext() {
    const { state: {id: assetId} } = useLocation()
    const [ asset, setAsset ] = useState(null)
    const [ apiErrors, setApiErrors ] = useState({})
    const history = useHistory()
    
    useEffect(() => {
        if ( assetId ) {
            findAsset(assetId)
                .then(data => {
                    data.ownerId = data.owner.id
                    data.locationId = data.location.id
                    data.modelId = data.model.id
                    data.invoiceId = data.invoice ? data.invoice.id : null
                    data.contractId = data.contract ? data.contract.id : null
                    data.endOfWarranty = data.endOfWarranty ? dateFormat(data.endOfWarranty) : null
                    setAsset(data)
                })
        }
    }, [ assetId ])

    const onSuccessUpdated = asset => {
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


    const onUpdateAsset = (assetData) => {
        updateAsset(assetId, assetData)
            .then(assetSaved => onSuccessUpdated(assetSaved))
            .catch(error => handleBadRequestError(error, setApiErrors))
    }
    return [ asset, onUpdateAsset, apiErrors ]
}

export { useAssetUpdatePageContext }