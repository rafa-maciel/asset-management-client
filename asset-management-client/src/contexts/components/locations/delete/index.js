import { deleteLocation } from "../../../../adapters/locations"

function useLocationDeleteConfirmationContext() {
    const locationDelete = (locationId, callback) => {
        deleteLocation(locationId)
            .then(confirm => callback(confirm))
    }

    return [ locationDelete ]
}

export { useLocationDeleteConfirmationContext }