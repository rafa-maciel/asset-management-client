import React from 'react'
import { createNewInvoice } from '../../../adapters/invoices'

import { InvoiceForm } from '../commons'

export default function InvoiceCreateForm({ onCreate }) {
    const handleSubmit = data => {
        createNewInvoice(data)
            .then(invoice => onCreate(invoice))
    }

    return (
        <InvoiceForm onSubmit={handleSubmit} />
    )
}