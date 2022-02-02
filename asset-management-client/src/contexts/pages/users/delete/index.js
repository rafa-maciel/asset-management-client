import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findUser } from "../../../../adapters/user";

function useUserDeletePage() {
    const { state: { id: userId }} = useLocation()
    const [user, setUser] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (userId) {
            findUser(userId)
                .then(userData => setUser(userData))
        }
    }, [ userId ])

    const onUserDeleted = () => {
        var message = {
            'type': 'success',
            'title': 'Usuário Deletado!',
            'message': 'O usuário [ ' + user.name  + ' ] foi deletado com sucesso'
        }

        history.push({
            pathname: '/users',
            state: { message }
        })

    }

    return [user, onUserDeleted]
}

export { useUserDeletePage }