import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { useLocationUpdate } from '../../../contexts/pages/locations/update'

import './style.css'
import { LocationForm } from '../../../components/locations/commons'

export default function LocationUpdate() {
    const [ location, updateLocation ] = useLocationUpdate()

    return (
        <>
            <Paper className="location-create-main">
                <Typography variant="h4" component="h1">Atualizar Localização</Typography>
                <LocationForm initialData={ location } onSubmit={ updateLocation } />
            </Paper>
        </>
    ) 
}