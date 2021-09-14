import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createNewUserAccount } from '../../../adapters/userAccount'
import { UserAccountForm } from '../../../components/userAccounts/create'

export default function UserAccountCreate() {
    const [createdAccount, setCreatedAccount] = useState(null)

    const onFormSubmit = data => {
        if (!data) 
            throw new Error('Data is invalid')

        createNewUserAccount(data)
            .then(data => {
                console.log('Account has been created')
                setCreatedAccount(data)
            })
    }

    const MainPage = () => {
        var message = {
            'type': 'success',
            'title': 'Conta de Acesso Criada!',
            'message': 'A conta de usuário [ ' + createdAccount.email + ' ] foi criada com sucesso'
        }

        return <Redirect 
                    to={{
                        pathname: '/accounts',
                        state: { message }
                    }} />
    }

    return (
        <>
            { createdAccount ? <MainPage /> : null }
            <Typography variant="h3" component="h1">Criar Conta de Usuário</Typography>
            
            <UserAccountForm onFormSubmit={ onFormSubmit } />
        </>
    )
}