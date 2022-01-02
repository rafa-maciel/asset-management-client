import React from 'react'
import { Typography } from '@material-ui/core'

import { useInvoiceDeletePageContext } from '../../../contexts/pages/invoices/delete'
import { InvoiceDeleteConfirmation } from '../../../components/invoices/delete'

export default function InvoiceDelete() {
    const [ invoice, onInvoiceDeleted ] = useInvoiceDeletePageContext()

    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Deletar Nota Fiscal
            </Typography>

            <InvoiceDeleteConfirmation
                invoice={ invoice }
                onDelete={ onInvoiceDeleted } />
        </>
    )
}