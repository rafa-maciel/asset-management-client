import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

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
                <TextField
                    label="Nome"
                    value={ name }
                    onChange={ e => setName(e.target.value) }
                    required
                    fullWidth />
                
                <TextField
                    label="E-mail"
                    type="email"
                    value={ email }
                    onChange={ e => setEmail(e.target.value) }
                    required
                    fullWidth />
                
                <TextField
                    label="Senha"
                    type="password"
                    value={ password }
                    onChange={ e => setPassword(e.target.value) }
                    required
                    fullWidth />

                <Select
                    label="Perfil"
                    value={ profile }
                    required
                    onChange={ e => setProfile(e.target.value) }
                    fullWidth>
                    
                    { profileChoices.map( choice => <MenuItem value={ choice }>{choice}</MenuItem>)}
                </Select>

                <Button type="submit">Salvar</Button>
            </form>
        </>
    )
}