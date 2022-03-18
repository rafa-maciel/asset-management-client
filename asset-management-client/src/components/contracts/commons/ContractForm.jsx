import React from 'react'
import { Button, Grid } from '@material-ui/core'

import SaveIcon from '@material-ui/icons/Save';

import { Link } from 'react-router-dom'
import RestoreIcon from '@material-ui/icons/Restore';
import { useCustomForm } from '../../commons/forms/useCustomForm';
import { contractSchema } from './validations';
import { FormCNPJMaskField, FormDateField, FormTextField } from '../../commons/forms/fields/FormFields';

export default function ContractForm({ onSubmit, initialData={}, saveErrors }) {
    const [ handleSubmit, control ] = useCustomForm(contractSchema, initialData, saveErrors)


    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Número" name="number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Fornecedor" name="vendor" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormCNPJMaskField control={control} label="CNPJ" name="vendorCNPJ" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormDateField control={ control } label="Começa Em" name="startsAt" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormDateField control={ control } label="Termina Em" name="endsAt" />
                    </Grid>
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
                </Grid>
            </form>
        </>
    )
}