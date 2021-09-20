import React from 'react'
import { Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';

export default function UserAccountNav({ onShowFilterClick }) {

    return (
        <>
            <Grid container justifyContent="flex-end" spacing={3}>
                <Grid item>
                    <Button
                        size="medium"
                        onClick={ onShowFilterClick }
                        variant="contained"
                        color="secondary"
                        startIcon={ <SearchIcon /> }>
                        Filtrar Contas de Acesso
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/accounts/create'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <AddCircleIcon /> }>
                        Criar Conta de Acesso
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}