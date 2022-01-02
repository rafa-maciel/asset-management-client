import { useHistory } from "react-router-dom"

function useInvoiceCreatePageContext() {
    const history = useHistory()

    const onInvoiceCreate = invoice => {
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

    return [ onInvoiceCreate ]
}

export { useInvoiceCreatePageContext }