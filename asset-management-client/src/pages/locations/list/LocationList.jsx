import React, { useState } from 'react'

import { usePageMessage } from '../../../contexts/components/utils/pageMessage'
import { LocationTable } from '../../../components/locations/list'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'

export default function LocationList() {
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()

    const handleTableError = error => {
        console.log(error)
        addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')
    }

    return (
        <>        
            <LocationTable 
                onError={ handleTableError }/>

            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>
        </>
    )
}