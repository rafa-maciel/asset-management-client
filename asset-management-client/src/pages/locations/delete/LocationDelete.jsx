import React from 'react'
import { Typography } from '@material-ui/core'
import { useLocationDeletePageContext } from '../../../contexts/pages/locations/delete'
import { LocationDeleteConfirmation } from '../../../components/locations/delete'

export default function LocationDelete() {
    const [ location, onLocationDeleted ] = useLocationDeletePageContext()

    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Deletar Localização
            </Typography>

            <LocationDeleteConfirmation
                location={ location }
                onDelete={ onLocationDeleted } />
        </>
    )
}