import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createNewLocation } from "../../../../adapters/locations"

function useLocationCreate(values) {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const createLocation = values => {
        createNewLocation(values)
            .then(location => {
                var message = {
                    'type': 'success',
                    'title': 'Localização Criada',
                    'message': 'A localização [ ' + location.title + ' ] foi criada com sucesso'
                }

                history.push({
                    pathname: '/locations',
                    state: { message }
                })
            }).catch( error => {
                if (error && error.response && error.response.data ) {
                    var resp = error.response.data
                    var newErrors = {}
                    resp.errors.forEach(fieldErrorString => {
                        let fieldError = fieldErrorString.split(": ");
                        newErrors[fieldError[0]] = fieldError[1]
                    });

                    setApiErrors(newErrors)
                }
            })
    }

    return [ createLocation, apiErrors ]
}

export { useLocationCreate }