import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findModel, updateModel } from "../../../../adapters/models";

function useModelUpdatePageContext() {
    const [model, setModel] = useState(null)
    const { state: {id: modelId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( modelId )
            findModel(modelId)
                .then(modelData => setModel(modelData))
    }, [ modelId ])

    const onSuccessUpdate = model => {
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

    const onUpdateModel = newModelData => {
        updateModel(modelId, newModelData)
            .then(model => onSuccessUpdate(model))
    }

    return [ model, onUpdateModel ]
}

export { useModelUpdatePageContext }