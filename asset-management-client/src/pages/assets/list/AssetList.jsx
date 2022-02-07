import React from 'react'
import { AssetTable } from '../../../components/assets/list'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'
import { usePageMessage } from '../../../contexts/components/utils/pageMessage'

export default function AssetList() {
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()

    const handleTableError = error => {
        console.log(error)
        addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')
    }

    return (
        <>
            <AssetTable 
                onError={ handleTableError }/>

            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>
        </>
    )
}