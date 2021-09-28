import { useHistory } from 'react-router-dom'

function useUserCreatePage() {
    const history = useHistory()

    const onUserCreate = user => {
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

    return [ onUserCreate ]
}

export { useUserCreatePage }