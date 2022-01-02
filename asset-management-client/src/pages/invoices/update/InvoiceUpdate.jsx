import React from 'react'
import { Typography } from '@material-ui/core'

import { useInvoiceUpdatePageContext } from '../../../contexts/pages/invoices/update'
import { InvoiceUpdateForm } from '../../../components/invoices/update'

export default function InvoiceUpdate() {
    const [ invoice, invoiceId, onInvoiceUpdated ] = useInvoiceUpdatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Nota Fiscal</Typography>
            <InvoiceUpdateForm
                initialData={ invoice }
                onUpdate={ onInvoiceUpdated }
                invoiceId={ invoiceId } />
        </>
    ) 
}