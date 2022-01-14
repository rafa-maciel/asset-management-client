import { TextField } from '@material-ui/core'
import React from 'react'
import { useValidBrand, useValidTitle, useValidType } from '../../../../contexts/components/models/create'

function TitleField({ title, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidTitle(onValidChange)

    return (
        <TextField
            label="Modelo"
            value={ title }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

function BrandField({ brand, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidBrand(onValidChange)

    return (
        <TextField
            label="Marca"
            value={ brand }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

function TypeField({ type, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidType(onValidChange)

    return (
        <TextField
            label="Tipo"
            value={ type }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

export { TitleField, BrandField, TypeField }
