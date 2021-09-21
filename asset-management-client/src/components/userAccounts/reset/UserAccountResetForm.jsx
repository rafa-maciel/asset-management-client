import { Button, Grid, TextField, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import RestoreIcon from '@material-ui/icons/Restore';
import SaveIcon from '@material-ui/icons/Save';

export default function UserAccountResetForm({ email, onConfirm }) {
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [invalidForm, setInvalidForm] = useState("")

    const handleFormSubmit = e => {
        e.preventDefault()
        
        if (password !== passwordCheck)
            setInvalidForm("Os campos de senha não conferem")
        else 
            onConfirm(password)
    }

    return (
        <>
            <form onSubmit={ handleFormSubmit }>
                <Grid container justifyContent="flex-end" spacing={3}>
                    <Grid item xs={12}>
                        <Alert variant="filled" severity="warning">
                            Você está resetando o acesso da conta [{ email }]. <br />
                            <Typography component="small" variant="caption">Esta conta somente conseguirá logar com essa nova senha</Typography>                
                        </Alert>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Senha"
                            error={ invalidForm ? true : false}
                            helperText={ invalidForm ? invalidForm : null }
                            type="password"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                            required
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Confirme a nova senha"
                            error={ invalidForm ? true : false}
                            helperText={ invalidForm ? invalidForm : null }
                            type="password"
                            value={ passwordCheck }
                            onChange={ e => setPasswordCheck(e.target.value) }
                            required
                            fullWidth />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            startIcon={<SaveIcon />}>
                                Confirmar Reset de Acesso
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button
                            component={ Link }
                            to={{
                                pathname: "/accounts",
                                status: {
                                    'message' : {
                                        'type': 'info',
                                        'title': 'Reset Cancelada',
                                        'message': 'A ação foi cancelada e a conta de acesso não foi resetada'
                                    }
                                }
                            }}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            startIcon={<RestoreIcon />}>
                                Voltar Para Lista de Contas
                        </Button>
                    </Grid>
                </Grid>
            </form>
            

            


            
            

            
        </>
    )
}