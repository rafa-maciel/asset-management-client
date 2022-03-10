import { createNewLocation } from "../../../../adapters/locations"

function useLocationCreate(values) {
    const createLocation = callback => {
        createNewLocation(values)
            .then(location => callback(location))
    }

    return [ createLocation ]
}

export { useLocationCreate }