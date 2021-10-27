import { Typography } from '@material-ui/core'
import React from 'react'
import { LocationCreateForm } from '../../../components/locations/create'
import { useLocationCreatePageContext } from '../../../contexts/pages/locations/create'

export default function LocationCreate() {
    const [ onLocationCreate ] = useLocationCreatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Criar Localização</Typography>
            <LocationCreateForm onCreate={ onLocationCreate }/>
        </>
    )
}