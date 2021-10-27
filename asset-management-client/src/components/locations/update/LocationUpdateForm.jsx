import React from 'react'
import { useLocationUpdateFormContext } from '../../../contexts/components/locations/update'
import { LocationForm } from '../commons'

export default function LocationUpdateForm({ initialData, locationId, onUpdate }) {
    const [
        title, setTitle,
        notes, setNotes,
        locationUpdate
    ] = useLocationUpdateFormContext( initialData, locationId )

    return (
        <LocationForm 
            onValidFormSubmit={ () => locationUpdate(onUpdate) }
            title={title}
            onChangeTitle={setTitle}
            notes={notes}
            onChangeNotes={setNotes}/>

    )
}