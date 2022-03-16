import { Typography } from '@material-ui/core'
import React from 'react'
import { UserForm } from '../../../components/users/commons/forms'
import { UserUpdateForm } from '../../../components/users/update'
import { useUserUpdatePage } from '../../../contexts/pages/users/update'

export default function UserUpdate() {
    const [ user, updateUser, apiErrors ] = useUserUpdatePage()

    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Usuário</Typography>
            <UserForm onSubmit={ updateUser } initialData={ user } saveErrors={ apiErrors } />
        </>
    )
}