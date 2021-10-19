import { deleteModel } from "../../../../adapters/models";

function useModelDeleteConfirmationContext() {
    const modelDelete = (modelId, callback) => {
        deleteModel(modelId)
            .then(confirm => callback(confirm))
    }

    return [ modelDelete ]
}

export { useModelDeleteConfirmationContext }