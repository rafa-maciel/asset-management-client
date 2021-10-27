import React, { useState } from 'react'
import { useLocationCreate } from '../../../contexts/components/locations/create'
import { LocationForm } from '../commons'

export default function LocationCreateForm({ onCreate }) {
    const [title, setTitle] = useState('')
    const [notes, setNotes] = useState('')

    const [ createLocation ] = useLocationCreate(title, notes)

    return (
        <LocationForm onValidFormSubmit={ () => createLocation(onCreate) } 
            title={title}
            onChangeTitle={setTitle}
            brand={notes}
            onChangeNotes={setNotes}/>
    )
}