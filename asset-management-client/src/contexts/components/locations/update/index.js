import { useEffect, useState } from "react";
import { updateLocation } from "../../../../adapters/locations"

function useLocationUpdateFormContext(initialData, locationId) {
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')

    useEffect(() => {
        if ( initialData ) {
            setTitle(initialData.title)
            setNotes(initialData.notes)
        }
    }, [ initialData ])

    const locationUpdate = callback => {
        var data = {
            title,
            notes
        }

        updateLocation(locationId, data)
            .then(location => callback(location))
    }

    return [ title, setTitle, notes, setNotes, locationUpdate ]    
}

export { useLocationUpdateFormContext }