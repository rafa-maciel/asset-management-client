import { useState } from "react";
import { useHistory } from "react-router-dom";
import { createNewModel } from "../../../../adapters/models"
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors";

function useModelCreatePageContext() {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const onSuccessRedirect = model => {
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

    const createModel = modelData => {
        createNewModel(modelData)
            .then(model => onSuccessRedirect(model))
            .catch( error => handleBadRequestError(error, setApiErrors))
    }

    return [ createModel, apiErrors ]
}

export { useModelCreatePageContext }