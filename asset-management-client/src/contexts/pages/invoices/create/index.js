import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createNewInvoice } from "../../../../adapters/invoices"
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors"

function useInvoiceCreatePageContext() {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const onSuccessCreated = invoice => {
        var message = {
            'type': 'success',
            'title': 'Nota Fiscal Criada',
            'message': 'A Nota Fiscal [ ' + invoice.number + ' ] foi criada com sucesso'
        }

        history.push({
            pathname: '/invoices',
            state: { message }
        })
    }

    const createInvoice = invoiceData => {
        console.log(invoiceData)
        createNewInvoice(invoiceData)
            .then(invoice => onSuccessCreated(invoice))
            .catch(errors => handleBadRequestError(errors, setApiErrors))
    }

    return [ createInvoice, apiErrors ]
}

export { useInvoiceCreatePageContext }