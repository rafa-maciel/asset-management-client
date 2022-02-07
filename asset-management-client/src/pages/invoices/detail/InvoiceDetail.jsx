import React from 'react'
import { Divider, Paper, Typography } from '@material-ui/core'
import { useInvoiceDetailPageContext } from '../../../contexts/pages/invoices/details'
import { InvoiceForm } from '../../../components/invoices/commons'
import { FileDashboard } from '../../files'

export default function InvoiceDetail() {
   const [ invoice ] = useInvoiceDetailPageContext()

   return (
    <>
        <Paper>
            <Typography variant='h4' component="div">Detalhes da Nota Fiscal</Typography>

            <InvoiceForm
                initialData={ invoice }
                readonly={ true }
                onSubmit={ e => null} />

            <Divider variant="middle" />
            <Typography variant='h6' component="div">Uploads</Typography>
            <FileDashboard
                invoiceId={ invoice ? invoice.id : null } />
        </Paper>
    </>
   )
    
}