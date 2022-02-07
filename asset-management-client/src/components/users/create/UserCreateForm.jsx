import React, { useState } from 'react'
import { Button, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { useUserCreate, useValidUserDepartment, useValidUserName, useValidUserRe, useValidUserStatus } from '../../../contexts/components/users/create/useUserCreate'
import SaveIcon from '@material-ui/icons/Save';
import { useFormInvalidCheck } from '../../../contexts/commons/useFormsUtils';

import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';

export default function UserCreateForm({ onSuccessfulyCreate }) {
    const [name, setName] = useState('')
    const [re, setRe] = useState('')
    const [department, setDepartment] = useState('')
    const [status, setStatus] = useState('ACTIVE')

    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()

    const [createUser] = useUserCreate(name, re, department, status);

    const handleFormSubmit = e => {
        e.preventDefault();
        if (!invalidForm)
            createUser( onSuccessfulyCreate )
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                       <NameField
                            onValidChange={ v => checkInvalidField(v, 'name') }
                            name={ name }
                            onChange={ setName } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ReField 
                            onValidChange={ v => checkInvalidField(v, 're') }
                            re={ re }
                            onChange={ setRe } />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <DepartmentField 
                            department={ department }
                            onValidChange={ v => checkInvalidField(v, 'department') }
                            onChange={ setDepartment }/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <StatusField 
                            status={ status }
                            onValidChange={ v => checkInvalidField(v, 'status') }
                            onChange={ setStatus } />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Button type="submit"
                                    fullWidth
                                    size="medium"
                                    disabled={ invalidForm }
                                    variant="contained"
                                    color="primary"
                                    startIcon={ <SaveIcon /> }>
                                        Salvar
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    component={ Link }
                                    to={{
                                        pathname: "/users",
                                        status: {
                                            'message' : {
                                                'type': 'info',
                                                'title': 'Criação Cancelada',
                                                'message': 'A ação foi cancelada e o usuário não foi criado'
                                            }
                                        }
                                        }}
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<RestoreIcon />}>
                                        Cancelar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    )    


}

function NameField({ name, onChange, onValidChange }) {
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

function ReField({ re, onChange, onValidChange }) {
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

function DepartmentField({ department, onChange, onValidChange }) {
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

function StatusField({ status, onChange, onValidChange }) {
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