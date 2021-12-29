import { Typography } from '@material-ui/core'
import React from 'react'
import { ContractCreateForm } from '../../../components/contracts/create'
import { useContractCreatePageContext } from '../../../contexts/pages/contracts/create'

export default function ContractCreate() {
    const [ onContractCreate ] = useContractCreatePageContext()

    return (
        <>
            <Typography variant="h3" component="h1">Criar Contrato</Typography>
            <ContractCreateForm onCreate={ onContractCreate }/>
        </>
    )
}