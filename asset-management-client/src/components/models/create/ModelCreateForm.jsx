import { Button, Grid, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useFormInvalidCheck } from '../../../contexts/commons/useFormsUtils';
import { useModelCreate, useValidBrand, useValidTitle, useValidType } from '../../../contexts/components/models/create';

import SaveIcon from '@material-ui/icons/Save';

export default function ModelCreateForm({ onCreate }) {
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')

    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()

    const [ createModel ] = useModelCreate(title, brand, type)

    const handleFormSubmit = e => {
        e.preventDefault()
        if (!invalidForm)
            createModel(onCreate)
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                       <TitleField
                            onValidChange={ v => checkInvalidField(v, 'title') }
                            title={ title }
                            onChange={ setTitle } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <BrandField 
                            onValidChange={ v => checkInvalidField(v, 'brand') }
                            brand={ brand }
                            onChange={ setBrand } />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TypeField 
                            type={ type }
                            onValidChange={ v => checkInvalidField(v, 'type') }
                            onChange={ setType }/>
                    </Grid>

                    <Grid item>
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
                </Grid>
            </form>
        </>
    )
}


function TitleField({ title, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidTitle(onValidChange)

    return (
        <TextField
            label="Titulo"
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