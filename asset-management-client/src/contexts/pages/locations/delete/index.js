import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { findLocation } from "../../../../adapters/locations"

function useLocationDeletePageContext() {
    const { state: { locationId }} = useLocation()
    const [location, setLocation] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if ( locationId )
            findLocation(locationId)
                .then(data => setLocation(data))
         
    }, [ locationId ])

    const onLocationDeleted = () => {
        var message = {
            'type': 'success',
            'title': 'Localização Deletada!',
            'message': 'A localicação [ ' + location.title  + ' ] foi deletada com sucesso'
        }

        history.push({
            pathname: '/locations',
            state: { message }
        })
    }

    return [ location, onLocationDeleted ]
}

export { useLocationDeletePageContext }