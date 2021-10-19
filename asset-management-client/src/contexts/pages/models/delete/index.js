import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findModel } from "../../../../adapters/models";

function useModelDeletePageContext() {
    const { state: { modelId }} = useLocation()
    const [model, setModel] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if ( modelId )
            findModel(modelId)
                .then(data => setModel(data))
         
    }, [ modelId ])

    const onModelDeleted = () => {
        var message = {
            'type': 'success',
            'title': 'Modelo de Ativo Deletado!',
            'message': 'O modelo de ativo [ ' + model.title  + ' ] foi deletado com sucesso'
        }

        history.push({
            pathname: '/models',
            state: { message }
        })
    }

    return [ model, onModelDeleted ]
}

export { useModelDeletePageContext }