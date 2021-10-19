import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';

export default function ModelNav({ onShowFilterClick }) {

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
                        Filtrar Modelos
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/models/create'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <AddCircleIcon /> }>
                        Criar Novo Modelo
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}