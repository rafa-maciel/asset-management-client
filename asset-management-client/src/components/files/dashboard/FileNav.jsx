import React from 'react'
import { Button, Grid } from '@material-ui/core'

import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function ContractNav({ onClickAddFile }) {
  
    return (
        <>
            <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item>
                    <Button
                        type="button"
                        size="medium"
                        variant="contained"
                        color="primary"
                        onClick={ onClickAddFile }
                        startIcon={ <AddCircleIcon /> }>
                        Adicionar Novo Arquivo
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}