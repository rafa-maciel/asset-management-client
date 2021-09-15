import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { findUserAccount, updateUserAccount } from '../../../adapters/userAccount'
import NavPageForwarder from '../../../components/commons/nav/NavPageForwarder'
import { UserAccountUpdateForm as AccountForm } from '../../../components/userAccounts/update'


export default function UserAccountUpdate() {
    const [account, setAccount] = useState(null)
    const { state: {accountId} } = useLocation()
    const [updatedSuccessfuly, setUpdatedSuccessfuly] = useState(false)

    useEffect(() => {
        if (accountId) {
            findUserAccount(accountId)
                .then(accountData => setAccount(accountData))
        }
    }, [ accountId ])

    const onFormSubmit = data => {
        if (!data) 
            throw new Error('Data is invalid')

        updateUserAccount(accountId, data)
            .then(data => {
                console.log('Account has been updated')
                setAccount(data)
                setUpdatedSuccessfuly(true)
            })
    }

    return (
        <>
            { updatedSuccessfuly ? 
                <NavPageForwarder 
                    path="/accounts" 
                    msgType="success"
                    msgTitle="Conta de Acesso Atualizada!" 
                    msgMessage={'A conta de usuário [ ' + account.email  + ' ] foi atualizada com sucesso'} />
            : null }
            
            <Typography variant="h3" component="h1">Atualizar Conta de Usuário</Typography>
            <AccountForm initialData={ account } onFormSubmit={ onFormSubmit }/>
        </>
    )
}