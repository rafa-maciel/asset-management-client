import { useHistory } from "react-router-dom"

function useLocationCreatePageContext() {
    const history = useHistory()

    const onLocationCreate = location => {
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

    return [ onLocationCreate ]
}

export { useLocationCreatePageContext }