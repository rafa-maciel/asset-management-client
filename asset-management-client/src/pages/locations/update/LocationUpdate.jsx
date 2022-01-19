import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { useLocationUpdatePageContext } from '../../../contexts/pages/locations/update'
import { LocationUpdateForm } from '../../../components/locations/update'

import './style.css'

export default function LocationUpdate() {
    const [ location, locationId, onLocationUpdated ] = useLocationUpdatePageContext()

    return (
        <>
            <Paper className="location-create-main">
                <Typography variant="h4" component="h1">Atualizar Localização</Typography>
                <LocationUpdateForm
                    initialData={ location }
                    onUpdate={ onLocationUpdated }
                    locationId={ locationId } />
            </Paper>
        </>
    ) 
}