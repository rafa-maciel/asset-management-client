import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { deleteUserAccount, findUserAccount } from '../../../adapters/userAccount'
import NavPageForwarder from '../../../components/commons/nav/NavPageForwarder'
import { UserAccountDeleteConfirmation as DeleteConfirmation } from '../../../components/userAccounts/delete'


export default function UserAccountDelete() {
    const [account, setAccount] = useState(null)
    const { state: {accountId} } = useLocation()
    const [deletedSuccessfuly, setDeletedSuccessfuly] = useState(false)

    useEffect(() => {
        if (accountId) {
            findUserAccount(accountId)
                .then(accountData => setAccount(accountData))
        }
    }, [ accountId ])

    const deleteAccount = () => {
        deleteUserAccount(accountId)
            .then(resp => {
                if (resp) {
                    console.log('Account has been deleted')
                    setDeletedSuccessfuly(true)
                }
            })
    }

    return (
        <>
            { deletedSuccessfuly ? 
                <NavPageForwarder 
                    path="/accounts" 
                    msgType="success"
                    msgTitle="Conta de Acesso Deletada!" 
                    msgMessage={'A conta de usuário [ ' + account.email  + ' ] foi deletada com sucesso'} />
                : null }

            <Typography 
                variant="h3" 
                component="h1">
                    Deletar conta de acesso
            </Typography>

            <DeleteConfirmation email={ account ? account.email : null } onConfirm={ deleteAccount } />
        </>
    )
}