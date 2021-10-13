import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findUser } from "../../../../adapters/user";

function useUserUpdatePage() {
    const [user, setUser] = useState(null)
    const { state: {userId}} = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( userId )
            findUser(userId)
                .then(userData => setUser(userData))

    }, [ userId ])

    const onUserUpdated = user => {
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

    return [ user, userId, onUserUpdated ]
}

export { useUserUpdatePage }