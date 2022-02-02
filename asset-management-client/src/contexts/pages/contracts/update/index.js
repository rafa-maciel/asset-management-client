import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findContract } from "../../../../adapters/contract";


function useContractUpdatePageContext() {
    const [ contract, setContract ] = useState(null)
    const { state: {id: contractId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( contractId ) {
            findContract(contractId)
                .then(data => setContract(data))
        }
    }, [ contractId ])

    const onContractUpdated = contract => {
        var message = {
            'type': 'success',
            'title': 'Contrato Atualizado!',
            'message': 'O Contrato [ ' + contract.number  + ' ] foi atualizado com sucesso'
        }

        history.push({
            pathname: '/contracts',
            state: { message }
        })
    }

    return [ contract, contractId, onContractUpdated ]
}

export { useContractUpdatePageContext }