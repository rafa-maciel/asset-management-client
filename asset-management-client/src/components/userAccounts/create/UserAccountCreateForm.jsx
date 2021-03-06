import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SaveIcon from '@material-ui/icons/Save';
import { Link } from 'react-router-dom'

import RestoreIcon from '@material-ui/icons/Restore';

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

                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit"
                                fullWidth
                                size="medium"
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
                                    pathname: "/accounts",
                                    status: {
                                        'message' : {
                                            'type': 'info',
                                            'title': 'Cria????o Cancelada',
                                            'message': 'A a????o foi cancelada e a conta de acesso n??o foi criada'
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
                
                
                
                
                

                

                
            </form>
        </>
    )
}