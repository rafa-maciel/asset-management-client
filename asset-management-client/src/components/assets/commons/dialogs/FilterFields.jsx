import React from 'react'
import { TextField } from "@material-ui/core"

function FilterTextField({ name, label, value, onChange }) {
    const handleChange = event => {
        var name = event.target.name
        var value = event.target.value

        onChange(name, value)
    }

    return (
        <TextField
            InputLabelProps={{ shrink: true }}
            name={ name }
            label={ label }
            value={ value }
            onChange={handleChange}
            fullWidth />
    )
}

export { FilterTextField }