import { Typography } from '@material-ui/core'
import React from 'react'
import { UserDeleteConfirmation } from '../../../components/users/delete'
import { useUserDeletePage } from '../../../contexts/pages/users/delete'

export default function UserDelete() {
    const [user, onUserDeleted] = useUserDeletePage()

    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Deletar usuário
            </Typography>

            <UserDeleteConfirmation
                user={ user }
                onDelete={ onUserDeleted } />
        </>
    )
}