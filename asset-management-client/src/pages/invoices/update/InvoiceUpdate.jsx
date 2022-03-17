import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import { useInvoiceUpdatePageContext } from '../../../contexts/pages/invoices/update'
import { InvoiceUpdateForm } from '../../../components/invoices/update'
import { InvoiceForm } from '../../../components/invoices/commons'

export default function InvoiceUpdate() {
    const [ invoice, updateInvoice, apiErrors] = useInvoiceUpdatePageContext()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Atualizar Nota Fiscal</Typography>
            <InvoiceForm onSubmit={ updateInvoice } initialData={ invoice } saveErrors={ apiErrors } />
        </Paper>
    ) 
}