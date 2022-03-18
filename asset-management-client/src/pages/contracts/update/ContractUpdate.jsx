import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import { useContractUpdatePageContext } from '../../../contexts/pages/contracts/update'
import { ContractForm } from '../../../components/contracts/commons'

export default function ContractUpdate() {
    const [ contract, updateContract, apiErrors ] = useContractUpdatePageContext()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Atualizar Contrato</Typography>
            <ContractForm onSubmit={ updateContract } initialData={contract} saveErrors={ apiErrors} />
        </Paper>
    ) 
}