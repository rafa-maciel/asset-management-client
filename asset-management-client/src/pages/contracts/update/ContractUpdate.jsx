import React from 'react'
import { Typography } from '@material-ui/core'

import { useContractUpdatePageContext } from '../../../contexts/pages/contracts/update'
import { ContractUpdateForm } from '../../../components/contracts/update'

export default function ContractUpdate() {
    const [ contract, contractId, onContractUpdated ] = useContractUpdatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Atualizar Contrato</Typography>
            <ContractUpdateForm
                initialData={ contract }
                onUpdate={ onContractUpdated }
                contractId={ contractId } />
        </>
    ) 
}