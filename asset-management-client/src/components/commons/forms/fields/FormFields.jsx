import React from 'react'
import { FormControl, FormHelperText, InputLabel, Select, TextField } from '@material-ui/core'
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

function FormSelectField({ name, label, control, children, defaultValue }) {
    const labelId = `${label}-id`

    return (
        <FormControl fullWidth >
            <InputLabel id={ labelId } shrink>{ label }</InputLabel>
            <Controller
                name={ name }
                control={ control }
                defaultValue={ defaultValue }
                render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                    <>
                        <Select
                            labelId={ labelId }
                            value={ value }
                            onChange={ onChange }
                            fullWidth
                            error={ !!error }>
                            
                            { children }
                        </Select>
                        <FormHelperText>{ error ? error.message : null }</FormHelperText>
                    </>
                )}
            />
            
            
        </FormControl>

       
    )
}

export { FormTextField, FormNumberField, FormSelectField }