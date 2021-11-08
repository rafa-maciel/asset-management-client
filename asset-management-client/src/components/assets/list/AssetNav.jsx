import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchIcon from '@material-ui/icons/Search';
import ImportExportIcon from '@material-ui/icons/ImportExport';

export default function AssetNav({ onShowFilterClick }) {
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
                        Filtrar Ativos
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/assets/create'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <AddCircleIcon /> }>
                        Criar Novo Ativo
                    </Button>
                </Grid>

                <Grid item>
                    <Button
                        component={ Link }
                        size="medium"
                        to={{
                            pathname: '/assets/import'
                        }}
                        variant="contained"
                        color="primary"
                        startIcon={ <ImportExportIcon /> }>
                        Importar Assets do Excel
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}