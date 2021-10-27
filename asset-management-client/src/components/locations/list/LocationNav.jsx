import React from 'react'
import { Button, Grid } from '@material-ui/core';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

export default function LocationNav({ onShowFilterClick }) {

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
                        Filtrar Localizações
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/locations/create'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <AddCircleIcon /> }>
                        Criar Nova Localização
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}