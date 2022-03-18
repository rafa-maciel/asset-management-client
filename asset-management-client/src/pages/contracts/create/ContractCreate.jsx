import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { ContractForm } from '../../../components/contracts/commons'
import { useContractCreatePageContext } from '../../../contexts/pages/contracts/create'

export default function ContractCreate() {
    const [ createContract, apiErrors ] = useContractCreatePageContext()

    return (
        <Paper>
            <Typography variant="h3" component="h1">Criar Contrato</Typography>
            <ContractForm onSubmit={ createContract } saveErrors={ apiErrors} />
        </Paper>
    )
}