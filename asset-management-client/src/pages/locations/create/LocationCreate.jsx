import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { LocationCreateForm } from '../../../components/locations/create'
import { useLocationCreatePageContext } from '../../../contexts/pages/locations/create'

import "./style.css"

export default function LocationCreate() {
    const [ onLocationCreate ] = useLocationCreatePageContext()

    return (
        <>
            <Paper className="location-create-main">
                <Typography variant="h4" component="h1">Criar Localização</Typography>
                <LocationCreateForm onCreate={ onLocationCreate } className="location-form"/>
            </Paper>
        </>
    )
}