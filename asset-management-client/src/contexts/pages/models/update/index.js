import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findModel } from "../../../../adapters/models";

function useModelUpdatePageContext() {
    const [model, setModel] = useState(null)
    const { state: {modelId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( modelId )
            findModel(modelId)
                .then(modelData => setModel(modelData))
    }, [ modelId ])

    const onModelUpdated = model => {
        var message = {
            'type': 'success',
            'title': 'Modelo Atualizado!',
            'message': 'O modelo [ ' + model.title  + ' ] foi atualizado com sucesso'
        }

        history.push({
            pathname: '/models',
            state: { message }
        })
    }

    return [ model, modelId, onModelUpdated]
}

export { useModelUpdatePageContext }