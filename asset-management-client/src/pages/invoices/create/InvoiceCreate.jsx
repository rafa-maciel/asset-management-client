import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { InvoiceForm } from '../../../components/invoices/commons'
import { InvoiceCreateForm } from '../../../components/invoices/create'
import { useInvoiceCreatePageContext } from '../../../contexts/pages/invoices/create'


export default function InvoiceCreate() {
    const [ createInvoice, apiErrors ] = useInvoiceCreatePageContext()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Cadastrar Nota Fiscal</Typography>
            <InvoiceForm onSubmit={ createInvoice } saveErrors={ apiErrors } />
        </Paper>
    )
}