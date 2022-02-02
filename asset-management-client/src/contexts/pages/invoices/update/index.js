import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findInvoice } from "../../../../adapters/invoices";

function useInvoiceUpdatePageContext() {
    const [ invoice, setInvoice ] = useState(null)
    const { state: {id: invoiceId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( invoiceId ) {
            findInvoice(invoiceId)
                .then(data => setInvoice(data))
        }
    }, [ invoiceId ])

    const onInvoiceUpdated = invoiceUpdate => {
        var message = {
            'type': 'success',
            'title': 'Nota Fiscal Atualizada!',
            'message': 'A Nota Fiscal [ ' + invoiceUpdate.number  + ' ] foi atualizada com sucesso'
        }

        history.push({
            pathname: '/invoices',
            state: { message }
        })
    }

    return [ invoice, invoiceId, onInvoiceUpdated ]
}

export { useInvoiceUpdatePageContext }