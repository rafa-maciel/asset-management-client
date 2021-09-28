import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import NavPageForwarder from '../../../components/commons/nav/NavPageForwarder'
import { UserCreateForm } from '../../../components/users/create'

export default function UserCreate() {
    const [userCreated, setUserCreated] = useState(null)

    return (
        <>
            { userCreated ? 
                <NavPageForwarder 
                    path="/users" 
                    msgType="success"
                    msgTitle="Usuário Criado!" 
                    msgMessage={'O usuário [ ' + userCreated.name  + ' ] foi criado com sucesso'} />
                    : null }

             <Typography variant="h3" component="h1">Criar Usuário</Typography>
            <UserCreateForm 
                onSuccessfulyCreate={setUserCreated} />
        </>
    )
}