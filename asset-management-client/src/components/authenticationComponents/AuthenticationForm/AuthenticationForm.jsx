import { Button, Container, TextField, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import React, { useState } from 'react'
import { authenticate } from '../../../adapters/authenticationAdapter'

export default function AuthenticationForm({ onSuccessfullyAuthenticated }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [formError, setFormError] = useState(false)

    const handleFormSubmit = event => {
        event.preventDefault()
        authenticate(email, password)
            .then(authenticated => {
                if (authenticated) {
                    onSuccessfullyAuthenticated()
                } else {
                    console.log("Login failed, try it again")
                    setFormError(true)
                }
            })
    }

    return (
        <Container component="main" maxWidth="xs">
            <Typography variant="h4" component="h2">Asset MGMT</Typography>
            <form noValidate onSubmit={handleFormSubmit}>
                { formError ? 
                   <Alert severity="error">
                        <AlertTitle>Autenticação Falhou</AlertTitle>
                        Não foi possivel conectar — <strong>verifique seu e-mail e senha e tente novamente!</strong>
                    </Alert>
                   : 
                   ""
                }

                <TextField 
                    value={ email }
                    onChange={ e => { setEmail(e.target.value) }}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="E-mail"
                    autoComplete="email"
                    type="email"
                    autoFocus />

                <TextField
                    value={ password }
                    onChange={e => { setPassword(e.target.value) }}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password" />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                        Entrar
                </Button>
            </form>
        </Container>
    )
}