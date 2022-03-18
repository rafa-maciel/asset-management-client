import { useState } from "react"
import { useHistory } from "react-router-dom"
import { createNewContract } from "../../../../adapters/contract"
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors"

function useContractCreatePageContext() {
    const history = useHistory()
    const [ apiErrors, setApiErrors ] = useState({})

    const onSuccessCreated = contract => {
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

    const createContract = contractData => {
        createNewContract(contractData)
            .then(contract => onSuccessCreated(contract))
            .catch(error => handleBadRequestError(error, setApiErrors))
    }

    return [ createContract, apiErrors ]
}

export { useContractCreatePageContext }