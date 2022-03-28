import { Divider, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { ContractInfo } from '../../../components/contracts/details'
import { useContractDetailsPageContext } from '../../../contexts/pages/contracts/details'
import { FileDashboard } from '../../files'

export default function ContractDetail() {
    const [ contract ] = useContractDetailsPageContext()

    return (
        <>
            <Paper>
                <Typography variant='h4' component="div">Detalhes do Contrato</Typography>

                <ContractInfo contract={contract} />

                <Divider variant="middle" />
                <Typography variant='h6' component="div">Uploads</Typography>
                <FileDashboard
                    contractId={ contract ? contract.id : null } />
            </Paper>
        </>
    )
}