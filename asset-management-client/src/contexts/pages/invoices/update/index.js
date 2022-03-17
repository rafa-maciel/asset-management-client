import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findInvoice, updateInvoice } from "../../../../adapters/invoices";
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors";

function useInvoiceUpdatePageContext() {
    const [ invoice, setInvoice ] = useState(null)
    const [ apiErrors, setApiErrors ] = useState({})
    const { state: {id: invoiceId} } = useLocation()
    const history = useHistory()

    const convertDate = date => {
        var arrDate = date.split("/");
        return `${arrDate[1]}/${arrDate[0]}/${arrDate[2]}`

    }

    useEffect(() => {
        if ( invoiceId ) {
            findInvoice(invoiceId)
                .then(data => {
                    data.date = convertDate(data.date)
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