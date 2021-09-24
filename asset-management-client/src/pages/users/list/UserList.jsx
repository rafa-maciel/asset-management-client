import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'
import { UserNav, UserTable } from '../../../components/users/list'
import { usePageMessage } from '../../../contexts/components/utils/pageMessage'

export default function UserList() {
    const [showSearchModal, setShowSearchModal] = useState(false)
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()
        
    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Usuários
            </Typography>

            <UserNav onShowFilterClick={ () => setShowSearchModal(true)} />

            <UserTable 
                showModal={showSearchModal}
                onCloseModal={ () => {
                    setShowSearchModal(false) 
                    addMessage('success', 'Filtro Atualizado', 'Você está vendo uma pequisa filtrada')
                }}
                onError={error => addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')} />
            
            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>


        </>
    )
}