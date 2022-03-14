import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { useModelUpdatePageContext } from '../../../contexts/pages/models/update'
import { ModelForm } from '../../../components/models/commons/forms'

export default function ModelUpdate() {
    const [ model, updateModel ] = useModelUpdatePageContext()
    
    return (
        <Paper>
            <Typography variant="h3" component="h1">Atualizar Modelos de Ativos</Typography>
            <ModelForm initialData={ model } onSubmit={ updateModel }/>
        </Paper>
    ) 
}