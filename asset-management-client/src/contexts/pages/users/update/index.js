import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findUser, updateUser } from "../../../../adapters/user";
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors";

function useUserUpdatePage() {
    const [user, setUser] = useState(null)
    const [ apiErrors, setApiErrors ] = useState({})
    const { state: {id: userId}} = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( userId )
            findUser(userId)
                .then(userData => setUser(userData))

    }, [ userId ])

    const onSuccessUpdated = user => {
        var message = {
            'type': 'success',
            'title': 'Usuário Atualizado!',
            'message': 'O usuário [ ' + user.name  + ' ] foi atualizado com sucesso'
        }
        history.push({
            pathname: '/users',
            state: { message }
        })
    }

    const onUpdateuser = userData => {
        updateUser(userId, userData)
            .then(userUpdated => onSuccessUpdated(userUpdated))
            .catch(error => handleBadRequestError(error, setApiErrors))
    }

    return [ user, onUpdateuser, apiErrors ]
}

export { useUserUpdatePage }