import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { findInvoice } from "../../../../adapters/invoices"


function useInvoiceDeletePageContext() {
    const { state: { id: invoiceId }} = useLocation()
    const [invoice, setInvoice] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if ( invoiceId )
            findInvoice(invoiceId)
                .then(data => setInvoice(data))
         
    }, [ invoiceId ])

    const onInvoiceDeleted = () => {
        var message = {
            'type': 'success',
            'title': 'Nota Fiscal Deletada!',
            'message': 'A Nota Fiscal [ ' + invoice.number  + ' ] foi deletada com sucesso'
        }

        history.push({
            pathname: '/invoices',
            state: { message }
        })
    }

    return [ invoice, onInvoiceDeleted ]
}

export { useInvoiceDeletePageContext }