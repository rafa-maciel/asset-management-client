import React from 'react'
import { Typography } from '@material-ui/core'
import { useLocationUpdatePageContext } from '../../../contexts/pages/locations/update'
import { LocationUpdateForm } from '../../../components/locations/update'

export default function LocationUpdate() {
    const [ location, locationId, onLocationUpdated ] = useLocationUpdatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Localização</Typography>
            <LocationUpdateForm
                initialData={ location }
                onUpdate={ onLocationUpdated }
                locationId={ locationId } />
        </>
    ) 
}