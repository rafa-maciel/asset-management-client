import { useHistory } from "react-router-dom"
import { createNewLocation } from "../../../../adapters/locations"

function useLocationCreate(values) {
    const history = useHistory()

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
            })
    }

    return [ createLocation ]
}

export { useLocationCreate }