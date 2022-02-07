import React from 'react'
import { Button, Grid } from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save';
import { useContractFormContext } from '../../../contexts/components/contract/commons';

import { Link } from 'react-router-dom'
import RestoreIcon from '@material-ui/icons/Restore';

export default function ContractForm({ readonly, initialData, onSubmit }) {
    const [ dataSubmitted, fields ] = useContractFormContext(readonly, initialData)

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit( dataSubmitted() )
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <Grid container spacing={3}>

                    { fields.map((field, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            { field }
                        </Grid>                    
                    ))}

                    { readonly ? null : 
                        <Grid item xs={12}>
                           <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Button type="submit"
                                        fullWidth
                                        size="medium"
                                        variant="contained"
                                        color="primary"
                                        startIcon={ <SaveIcon /> }>
                                            Salvar
                                    </Button>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button
                                        component={ Link }
                                        to={{
                                            pathname: "/contracts",
                                            status: {
                                                'message' : {
                                                    'type': 'info',
                                                    'title': 'Criação Cancelada',
                                                    'message': 'A ação foi cancelada e o contrato não foi criado'
                                                }
                                            }
                                            }}
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<RestoreIcon />}>
                                            Cancelar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </form>
        </>
    )
}