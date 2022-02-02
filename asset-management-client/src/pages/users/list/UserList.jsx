
import React from 'react'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'
import { UserTable } from '../../../components/users/list'
import { usePageMessage } from '../../../contexts/components/utils/pageMessage'

export default function UserList() {
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()
        
    return (
        <>
            <UserTable 
                onError={error => addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')} />
            
            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>
        </>
    )
}