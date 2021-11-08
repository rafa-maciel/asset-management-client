import { deleteAsset } from "../../../../adapters/assets"

function useAssetDeleteConfirmationContext() {
    const assetDelete = (assetId, callback) => {
        deleteAsset(assetId)
            .then(confirm => callback(confirm))
    }

    return [ assetDelete ]
}

export { useAssetDeleteConfirmationContext }