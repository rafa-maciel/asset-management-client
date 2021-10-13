import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import ImportExportIcon from '@material-ui/icons/ImportExport';

export default function UserNav({ onShowFilterClick }) {

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
                        Filtrar Usuários
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/users/create'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <AddCircleIcon /> }>
                        Criar Novo Usuário
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/users/import'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <ImportExportIcon /> }>
                        Importar Usuários do Excel
                    </Button>
                </Grid>
            </Grid>
        </>
    )

}