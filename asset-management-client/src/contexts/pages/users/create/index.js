import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { createNewUser } from '../../../../adapters/user'
import { handleBadRequestError } from '../../../../adapters/util/handleApiErrors'

function useUserCreatePage() {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const onSuccessCreated = user => {
        var message = {
            'type': 'success',
            'title': 'Usuário Criado!',
            'message': 'O usuário [ ' + user.name  + ' ] foi criado com sucesso'
        }

        history.push({
            pathname: '/users',
            state: { message }
        })
    }

    const createUser = userData => {
        createNewUser(userData)
            .then( user => onSuccessCreated(user))
            .catch( error => handleBadRequestError(error, setApiErrors))
    }

    return [ createUser, apiErrors ]
}

export { useUserCreatePage }