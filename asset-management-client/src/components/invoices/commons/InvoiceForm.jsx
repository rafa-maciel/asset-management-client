import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

import SaveIcon from '@material-ui/icons/Save';
import RestoreIcon from '@material-ui/icons/Restore';
import { invoiceSchema } from './validation';
import { FormCNPJMaskField, FormDateField, FormNumberField, FormTextField } from '../../commons/forms/fields/FormFields';
import { useCustomForm } from '../../commons/forms/useCustomForm';


export default function InvoiceForm({ onSubmit, initialData={}, saveErrors }) {
    const [ handleSubmit, control ] = useCustomForm(invoiceSchema, initialData, saveErrors)


    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormNumberField control={ control } label="Número" name="number" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Fornecedor" name="vendor" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormCNPJMaskField control={ control } label="CNPJ" name="vendorCNPJ" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormDateField control={ control } label="Data de Emissão" name="date"/>
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
                                        pathname: "/invoices",
                                        status: {
                                            'message' : {
                                                'type': 'info',
                                                'title': 'Criação Cancelada',
                                                'message': 'A ação foi cancelada e a nota fiscal não foi criada'
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