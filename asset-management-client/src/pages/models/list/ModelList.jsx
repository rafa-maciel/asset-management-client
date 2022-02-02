import React from 'react'
import { ModelTable } from '../../../components/models/list'
import { usePageMessage } from '../../../contexts/components/utils/pageMessage'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'

export default function ModelList() {
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()

    const handleTableError = error => {
        console.log(error)
        addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')
    }

    return (
        <>        
            <ModelTable 
                onError={ handleTableError }/>


            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>
        </>
    )
}