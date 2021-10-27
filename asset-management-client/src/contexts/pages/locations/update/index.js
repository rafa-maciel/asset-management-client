import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findLocation } from "../../../../adapters/locations";

function useLocationUpdatePageContext() {
    const [ location, setLocation ] = useState(null)
    const { state: {locationId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( locationId ) {
            findLocation(locationId)
                .then(data => setLocation(data))
        }
    }, [ locationId ])

    const onLocationUpdated = location => {
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

    return [ location, locationId, onLocationUpdated ]
}

export { useLocationUpdatePageContext }