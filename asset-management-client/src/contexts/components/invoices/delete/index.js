import { deleteInvoice } from "../../../../adapters/invoices"

function useInvoiceDeleteConfirmationContext() {
    const invoiceDelete = (invoiceId, callback) => {
        deleteInvoice(invoiceId)
            .then(confirm => callback(confirm))
    }

    return [ invoiceDelete ]
}

export { useInvoiceDeleteConfirmationContext }