import { Typography } from '@material-ui/core'
import React from 'react'
import { InvoiceCreateForm } from '../../../components/invoices/create'
import { useInvoiceCreatePageContext } from '../../../contexts/pages/invoices/create'


export default function InvoiceCreate() {
    const [ onInvoiceCreate ] = useInvoiceCreatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Cadastrar Nota Fiscal</Typography>
            <InvoiceCreateForm onCreate={ onInvoiceCreate }/>
        </>
    )
}