import React from 'react'
import { Typography } from '@material-ui/core'
import { useModelUpdatePageContext } from '../../../contexts/pages/models/update'
import { ModelUpdateForm } from '../../../components/models/update'

export default function ModelUpdate() {
    const [ model, modelId, onModelUpdated ] = useModelUpdatePageContext()
    
    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Modelos de Ativos</Typography>
            <ModelUpdateForm
                initialData={ model }
                onUpdate={ onModelUpdated }
                modelId={ modelId } />
        </>
    ) 
}