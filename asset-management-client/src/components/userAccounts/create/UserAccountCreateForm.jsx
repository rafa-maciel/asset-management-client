import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SaveIcon from '@material-ui/icons/Save';

export default function UserAccountCreateForm({ onFormSubmit }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profile, setProfile] = useState('RH')

    const profileChoices = ['ADMIN', 'IT', 'RH']

    const handleFormSubmit = e => {
        e.preventDefault()
        var data = {
            name,
            email,
            password,
            profile
        }

        onFormSubmit(data)
    }


    return (
        <>
            <form onSubmit={ handleFormSubmit }>
                <Grid container spacing={3} justifyContent="flex-end">
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
                        <TextField
                            label="Senha"
                            type="password"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                            required
                            fullWidth />
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
                                Salvar
                        </Button>
                    </Grid>

                </Grid>
                
                
                
                
                

                

                
            </form>
        </>
    )
}