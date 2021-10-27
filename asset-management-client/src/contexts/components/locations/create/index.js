import { createNewLocation } from "../../../../adapters/locations"

function useLocationCreate(title, notes) {
    const createLocation = callback => {
        var data = {
            title,
            notes
        }

        createNewLocation(data)
            .then(location => callback(location))
    }

    return [ createLocation ]
}

export { useLocationCreate }