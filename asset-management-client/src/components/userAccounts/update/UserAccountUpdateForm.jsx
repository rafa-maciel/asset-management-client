import { Button, FormControlLabel, MenuItem, Select, Switch, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

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
                
                <FormControlLabel
                    label='Ativo'
                    control={
                        <Switch
                            checked={ enabled }
                            onChange={ e => setEnabled(e.target.checked)} />} />
                
                <Select
                    label="Perfil"
                    value={ profile }
                    required
                    onChange={ e => setProfile(e.target.value) }
                    fullWidth>
                    
                    { profileChoices.map( choice => <MenuItem value={ choice }>{choice}</MenuItem>)}
                </Select>

                <Button type="submit">Atualizar</Button>
            </form>
        </>
    )

}