import { Typography } from '@material-ui/core'
import React from 'react'
import { UserCreateForm } from '../../../components/users/create'
import { useUserCreatePage } from '../../../contexts/pages/users/create'

export default function UserCreate() {
    const [ onUserCreate ] = useUserCreatePage()

    return (
        <>
            <Typography variant="h3" component="h1">Criar Usuário</Typography>
            <UserCreateForm 
                onSuccessfulyCreate={onUserCreate} />
        </>
    )
}