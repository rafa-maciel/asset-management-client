import { useHistory } from "react-router-dom";

function useModelCreatePageContext() {
    const history = useHistory()

    const onModelCreate = model => {
        var message = {
            'type': 'success',
            'title': 'Modelo de Ativo Criado',
            'message': 'O Modelo de ativo [ ' + model.title + ' ] foi criado com sucesso'
        }

        history.push({
            pathname: '/models',
            state: { message }
        })
    }

    return [ onModelCreate ]
}

export { useModelCreatePageContext }