import { Typography } from '@material-ui/core'
import React from 'react'
import { ModelCreateForm } from '../../../components/models/create'
import { useModelCreatePageContext } from '../../../contexts/pages/models/create'

export default function ModelCreate() {
    const [ onModelCreate ] = useModelCreatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Criar Modelo de Ativo</Typography>
            <ModelCreateForm onCreate={ onModelCreate }/>
        </>
    )
}