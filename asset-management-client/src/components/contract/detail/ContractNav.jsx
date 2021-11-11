import React from 'react'
import { Button, Grid } from '@material-ui/core'

import AddCircleIcon from '@material-ui/icons/AddCircle';
import EditIcon from '@material-ui/icons/Edit';

export default function ContractNav({ contract, onClickAddContract, onClickEditContract, onClickDeleteContract }) {
    const hasContract = () => {
        return contract && contract.id
    }
    return (
        <>
            <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item>
                    <Button
                        type="button"
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={onClickEditContract}
                        disabled={ !hasContract() }
                        startIcon={ <EditIcon /> }>
                        Editar Contrato
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        type="button"
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={ onClickDeleteContract }
                        disabled={ !hasContract() }
                        startIcon={ <EditIcon /> }>
                        Deletar Contrato
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        type="button"
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={ onClickAddContract }
                        disabled={ hasContract() }
                        startIcon={ <AddCircleIcon /> }>
                        Adicionar Contrato
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}