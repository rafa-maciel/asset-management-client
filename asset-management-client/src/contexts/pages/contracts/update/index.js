import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { findContract, updateContract } from "../../../../adapters/contract";
import { handleBadRequestError } from "../../../../adapters/util/handleApiErrors";
import { dateFormat } from "../../../../utils/conversors";


function useContractUpdatePageContext() {
    const [ contract, setContract ] = useState(null)
    const [ apiErrors, setApiErrors ] = useState({})
    const { state: {id: contractId} } = useLocation()
    const history = useHistory()

    useEffect(() => {
        if ( contractId ) {
            findContract(contractId)
                .then(data => {
                    data.startsAt = dateFormat(data.startsAt)
                    data.endsAt = dateFormat(data.endsAt)
                    setContract(data)
                })
        }
    }, [ contractId ])

    const onSuccessUpdated = contract => {
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

    const onUpdateContract = (contractData) => {     
        updateContract(contractId, contractData)
                .then(contract => onSuccessUpdated(contract))
                .catch(errors => handleBadRequestError(errors, setApiErrors))
    }

    return [ contract, onUpdateContract, apiErrors ]
}

export { useContractUpdatePageContext }