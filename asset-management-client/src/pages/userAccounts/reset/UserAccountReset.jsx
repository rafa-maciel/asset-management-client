import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { findUserAccount, resetUserAccount } from '../../../adapters/userAccount'
import NavPageForwarder from '../../../components/commons/nav/NavPageForwarder'
import { UserAccountResetForm } from '../../../components/userAccounts/reset'

export default function UserAccountReset() {
    const [account, setAccount] = useState(null)
    const [updatedSuccessfuly, setUpdatedSuccessfuly] = useState(false)
    const { state: {accountId} } = useLocation()

    useEffect(() => {
        if (accountId) {
            findUserAccount(accountId)
                .then(accountData => setAccount(accountData))
        }
    }, [ accountId ])

    const resetPassword = newPassword => {
        resetUserAccount(accountId, newPassword)
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
                    msgTitle="Conta de Acesso Resetada!" 
                    msgMessage={'A conta de usuário [ ' + account.email  + ' ] foi resetada com sucesso'} />
            : null }

            <Typography variant="h3" component="h1">Resetar conta de Acesso</Typography>
            
            <UserAccountResetForm email={account ? account.email : ""} onConfirm={ resetPassword } />
        </>
    )
}