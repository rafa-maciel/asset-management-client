import React from 'react'

import { usePageMessage } from '../../../contexts/components/utils/pageMessage'

import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'
import { InvoiceTable } from '../../../components/invoices/list'

export default function InvoiceList() {
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()

    const handleTableError = error => {
        console.log(error)
        addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')
    }

    return (
        <>        
            <InvoiceTable 
                onError={ handleTableError }/>

            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>
        </>
    )
}