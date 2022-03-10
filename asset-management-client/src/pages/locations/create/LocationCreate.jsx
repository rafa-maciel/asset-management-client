import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { LocationForm } from '../../../components/locations/commons'
import { useLocationCreate } from '../../../contexts/pages/locations/create'

import "./style.css"

export default function LocationCreate() {
    const [ createLocation ] = useLocationCreate()

    return (
        <>
            <Paper className="location-create-main">
                <Typography variant="h4" component="h1">Criar Localização</Typography>
                <LocationForm onSubmit={ createLocation } />
            </Paper>
        </>
    )
}