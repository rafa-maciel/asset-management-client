import React from 'react'
import { updateInvoice } from '../../../adapters/invoices'
import { InvoiceForm } from '../commons'


export default function InvoiceUpdateForm({ initialData, invoiceId, onUpdate }) {
    
    const handleFormSubmit = data => {
        updateInvoice(invoiceId, data)
            .then(invoice => onUpdate(invoice))
    }

    return (
        <InvoiceForm initialData={initialData}
            onSubmit={handleFormSubmit} />

    )
}