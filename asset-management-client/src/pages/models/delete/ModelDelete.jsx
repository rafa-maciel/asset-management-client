import React from 'react'
import { Typography } from '@material-ui/core'
import { useModelDeletePageContext } from '../../../contexts/pages/models/delete'
import { ModelDeleteConfirmation } from '../../../components/models/delete'

export default function ModelDelete() {
    const [ model, onModelDeleted ] = useModelDeletePageContext()

    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Deletar Modelo de Ativo
            </Typography>

            <ModelDeleteConfirmation
                model={ model }
                onDelete={ onModelDeleted } />
        </>
    )
}