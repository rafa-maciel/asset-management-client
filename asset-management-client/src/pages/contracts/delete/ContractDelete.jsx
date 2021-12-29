import React from 'react'
import { Typography } from '@material-ui/core'

import { useContractDeletePageContext } from '../../../contexts/pages/contracts/delete'
import { ContractDeleteConfirmation } from '../../../components/contracts/delete'

export default function ContractDelete() {
    const [ contract, onContractDeleted ] = useContractDeletePageContext()

    return (
        <>
            <Typography 
                variant="h3" 
                component="h1">
                    Deletar Contrato
            </Typography>

            <ContractDeleteConfirmation
                contract={ contract }
                onDelete={ onContractDeleted } />
        </>
    )
}