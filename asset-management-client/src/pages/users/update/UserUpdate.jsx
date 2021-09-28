import { Typography } from '@material-ui/core'
import React from 'react'
import { UserUpdateForm } from '../../../components/users/update'
import { useUserUpdatePage } from '../../../contexts/pages/users/update'

export default function UserUpdate() {
    const [ user, userId, onUserUpdated ] = useUserUpdatePage()

    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Usuário</Typography>
            <UserUpdateForm
                initialData={ user }
                onUpdate={ onUserUpdated }
                userId={ userId } />
        </>
    )
}