import React from 'react'
import { Divider, Paper, Typography } from '@material-ui/core'
import { useInvoiceDetailPageContext } from '../../../contexts/pages/invoices/details'
import { FileDashboard } from '../../files'
import { InvoiceInfo } from '../../../components/invoices/details'

export default function InvoiceDetail() {
   const [ invoice ] = useInvoiceDetailPageContext()

   return (
    <>
        <Paper>
            <Typography variant='h4' component="div">Detalhes da Nota Fiscal</Typography>

            <InvoiceInfo invoice={ invoice } />

            <Divider variant="middle" />
            <Typography variant='h6' component="div">Uploads</Typography>
            <FileDashboard
                invoiceId={ invoice ? invoice.id : null } />
        </Paper>
    </>
   )
    
}