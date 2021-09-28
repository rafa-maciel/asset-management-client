import { FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@material-ui/core"
import { useValidUserDepartment, useValidUserName, useValidUserRe, useValidUserStatus } from "../../../contexts/components/users/create/useUserCreate"

function UserNameField({ name, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate] = useValidUserName(onValidChange)

    return (
        <TextField
            label="Nome"
            value={ name }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

function UserReField({ re, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate] = useValidUserRe(onValidChange)
    return (
        <TextField
            label="RE"
            type="number"
            value={ re }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={fieldInvalid ? invalidMessage : ''}
            onBlur={ e => validate(e.target.value) }
            required
            fullWidth />
    )
}

function UserDepartmentField({ department, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate] = useValidUserDepartment(onValidChange)

    return (
        <TextField
            label="Department"
            value={ department }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            onBlur={ e => validate(e.target.value) }
            required
            fullWidth />
    )
}

function UserStatusField({ status, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate] = useValidUserStatus(onValidChange)

    return (
        <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
                labelId="staus-label"
                value={ status }
                required
                error={ fieldInvalid }
                onChange={ e => onChange(e.target.value) }
                onBlur={ e => validate(e.target.value) }
                fullWidth>
                
                <MenuItem value="ACTIVE">Ativo</MenuItem>
                <MenuItem value="INACTIVE">Inativo</MenuItem>
                <MenuItem value="LICENSE">Licença</MenuItem>
            </Select>
            <FormHelperText>{ fieldInvalid ? invalidMessage : ''}</FormHelperText>
        </FormControl>
    )
}

export { UserNameField, UserReField, UserDepartmentField, UserStatusField }