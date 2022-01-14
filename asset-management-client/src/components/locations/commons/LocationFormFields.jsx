import React from 'react'
import { TextField } from '@material-ui/core'
import { useValidNotes, useValidTitle } from '../../../contexts/components/locations/commons'

function LocationTitleField({ title, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidTitle(onValidChange)

    return (
        <TextField
            label="Localização"
            value={ title }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

function LocationNotesField({ notes, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidNotes(onValidChange)

    return (
        <TextField
            label="Endereço"
            value={ notes }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

export { LocationNotesField, LocationTitleField }