import { useHistory } from "react-router-dom"

function useContractCreatePageContext() {
    const history = useHistory()

    const onContractCreate = contract => {
        var message = {
            'type': 'success',
            'title': 'Contrato Criado',
            'message': 'O contrato [ ' + contract.number + ' ] foi criado com sucesso'
        }

        history.push({
            pathname: '/contracts',
            state: { message }
        })
    }

    return [ onContractCreate ]
}

export { useContractCreatePageContext }