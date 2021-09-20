import { Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Switch, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SaveIcon from '@material-ui/icons/Save';

export default function UserAccountUpdateForm({ initialData:accountData, onFormSubmit }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [enabled, setEnabled] = useState('')
    const [profile, setProfile] = useState('')

    const profileChoices = ['ADMIN', 'IT', 'RH']

    useEffect(() => {
        if (accountData) {
            setName(accountData.name)
            setEmail(accountData.email)
            setEnabled(accountData.enabled)
            setProfile(accountData.profile)
        }

    }, [ accountData ])


    const handleFormSubmit = e => {
        e.preventDefault()
        var data = {
            name,
            email,
            enabled,
            profile
        }

        onFormSubmit(data)
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit }>
                <Grid container justifyContent="flex-end" spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Nome"
                            value={ name }
                            onChange={ e => setName(e.target.value) }
                            required
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="E-mail"
                            type="email"
                            value={ email }
                            onChange={ e => setEmail(e.target.value) }
                            required
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControlLabel
                            label='Ativo'
                            control={
                                <Switch
                                    checked={ enabled }
                                    onChange={ e => setEnabled(e.target.checked)} />} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel id="perfil-label">Perfil</InputLabel>
                            <Select
                                labelId="perfil-label"
                                value={ profile }
                                required
                                onChange={ e => setProfile(e.target.value) }
                                fullWidth>
                                
                                { profileChoices.map( choice => <MenuItem value={ choice }>{choice}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item>
                        <Button type="submit"
                            fullWidth
                            size="medium"
                            variant="contained"
                            color="primary"
                            startIcon={ <SaveIcon /> }>
                                Atualizar
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )

}