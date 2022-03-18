import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findInvoice, updateInvoice } from "../../../../adapters/invoices";
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors";
import { dateFormat } from "../../../../utils/conversors";

function useInvoiceUpdatePageContext() {
    const [ invoice, setInvoice ] = useState(null)
    const [ apiErrors, setApiErrors ] = useState({})
    const { state: {id: invoiceId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( invoiceId ) {
            findInvoice(invoiceId)
                .then(data => {
                    data.date = dateFormat(data.date)
                    setInvoice(data)
                })
        }
    }, [ invoiceId ])

    const onSuccessUpdated = invoiceUpdate => {
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

    const onUpdateInvoice = invoiceData => {
        updateInvoice(invoiceId, invoiceData)
            .then(invoiceUpdated => onSuccessUpdated(invoiceUpdated))
            .catch(error => handleBadRequestError(error, setApiErrors))
    }

    return [ invoice, onUpdateInvoice, apiErrors ]
}

export { useInvoiceUpdatePageContext }