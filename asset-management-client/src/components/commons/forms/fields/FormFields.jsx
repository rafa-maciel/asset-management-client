import React from 'react'
import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'


function FormTextField({ name, label, control, defaultValue="" }) {
    return (
        <Controller
            name={ name }
            control={ control }
            defaultValue={ defaultValue }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <TextField
                    label={ label }
                    value={ value }
                    onChange={onChange}
                    error={ !!error }
                    helperText={ error ? error.message : null }
                    fullWidth />
            )}
            />
    )
}

export { FormTextField }