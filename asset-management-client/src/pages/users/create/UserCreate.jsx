import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { UserForm } from '../../../components/users/commons/forms'
import { useUserCreatePage } from '../../../contexts/pages/users/create'

export default function UserCreate() {
    const [ createUser, apiErrors ] = useUserCreatePage()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Criar Usuário</Typography>
            <UserForm onSubmit={ createUser } saveErrors={ apiErrors } />
        </Paper>
    )
}