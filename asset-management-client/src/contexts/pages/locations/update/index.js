import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findLocation, updateLocation } from "../../../../adapters/locations";

function useLocationUpdate() {
    const [ location, setLocation ] = useState(null)
    const { state: {id : locationId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( locationId ) {
            findLocation(locationId)
                .then(data => setLocation(data))
        }
    }, [ locationId ])

    const redirectToList = location => {
        var message = {
            'type': 'success',
            'title': 'Localização Atualizada!',
            'message': 'A localização [ ' + location.title  + ' ] foi atualizada com sucesso'
        }

        history.push({
            pathname: '/locations',
            state: { message }
        })
    }

    const onUpdateLocation = newLocationData => {
        updateLocation(locationId, newLocationData)
            .then(newLocation => redirectToList(newLocation))
    }


    return [ location, onUpdateLocation ]
}

export { useLocationUpdate }