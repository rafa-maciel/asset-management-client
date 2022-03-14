import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { ModelForm } from '../../../components/models/commons/forms'
import { useModelCreatePageContext } from '../../../contexts/pages/models/create'

export default function ModelCreate() {
    const [ createModel, apiErrors ] = useModelCreatePageContext()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Criar Modelo de Ativo</Typography>
            <ModelForm onSubmit={ createModel } saveErrors={ apiErrors } />
        </Paper>
    )
}