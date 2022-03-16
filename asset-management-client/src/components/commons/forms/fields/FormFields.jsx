import React, { useEffect } from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'


function FormTextField({ name, label, control}) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <TextField
                    InputLabelProps={{ shrink: true }}
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

function FormNumberField({ name, label, control}) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <TextField
                    InputLabelProps={{ shrink: true }}
                    type="number"
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

function FormSelectField({ name, label, control, children }) {
    
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <FormControl fullWidth >
                    <InputLabel id={name + "-label"} shrink>{ label }</InputLabel>
                    <Select
                        labelId={name + "-label"}
                        value={ value }
                        onChange={ onChange }
                        fullWidth
                        defaultValue=""
                        error={ !!error }>
                        
                        { children }
                    </Select>
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                </FormControl>
            )}
            />
    )
}

export { FormTextField, FormNumberField, FormSelectField }