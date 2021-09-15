import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { createNewUserAccount } from '../../../adapters/userAccount'
import NavPageForwarder from '../../../components/commons/nav/NavPageForwarder'
import { UserAccountCreateForm as AccountForm } from '../../../components/userAccounts/create'


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

    return (
        <>
            { createdAccount ? 
                <NavPageForwarder 
                    path="/accounts" 
                    msgType="success"
                    msgTitle="Conta de Acesso Criada!" 
                    msgMessage={'A conta de usuário [ ' + createdAccount.email  + ' ] foi criada com sucesso'} />
                    : null }

            <Typography variant="h3" component="h1">Criar Conta de Usuário</Typography>
            
            <AccountForm onFormSubmit={ onFormSubmit } />
        </>
    )
}