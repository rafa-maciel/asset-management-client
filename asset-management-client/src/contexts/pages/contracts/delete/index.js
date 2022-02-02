import { useEffect, useState } from "react"
import { useHistory, useLocation } from "react-router-dom"
import { findContract } from "../../../../adapters/contract"

function useContractDeletePageContext() {
    const { state: { id: contractId }} = useLocation()
    const [contract, setContract] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if ( contractId )
            findContract(contractId)
                .then(data => setContract(data))
         
    }, [ contractId ])

    const onContractDeleted = () => {
        var message = {
            'type': 'success',
            'title': 'Contrato Deletado!',
            'message': 'O Contrato [ ' + contract.number  + ' ] foi deletado com sucesso'
        }

        history.push({
            pathname: '/contracts',
            state: { message }
        })
    }

    return [ contract, onContractDeleted ]
}

export { useContractDeletePageContext }