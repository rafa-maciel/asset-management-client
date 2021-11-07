import { createNewAsset } from "../../../../adapters/assets"

function useAssetCreate(ownerId, companyIdentification, 
        modelId, locationId, status, chipIdentification, lineIdentification) {
    
    const createAsset = callback => {
        var data = {
            ownerId,
            companyIdentification,
            modelId,
            locationId,
            status,
            chipIdentification,
            lineIdentification
        }

        
        createNewAsset(data)
            .then(asset => callback(asset))
    }

    return [ createAsset ]
}

export { useAssetCreate }