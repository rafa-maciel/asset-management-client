import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createNewLocation } from "../../../../adapters/locations"
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors"

function useLocationCreate(values) {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const onSuccessRedirect = (location) => {
        var message = {
            'type': 'success',
            'title': 'Localização Criada',
            'message': 'A localização [ ' + location.title + ' ] foi criada com sucesso'
        }

        history.push({
            pathname: '/locations',
            state: { message }
        })
    }

    const createLocation = values => {
        createNewLocation(values)
            .then(location => onSuccessRedirect(location))
            .catch( error => handleBadRequestError(error, setApiErrors))
    }

    return [ createLocation, apiErrors ]
}

export { useLocationCreate }