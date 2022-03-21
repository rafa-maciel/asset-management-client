import { Button, Grid, MenuItem } from '@material-ui/core';
import React from 'react'

import SaveIcon from '@material-ui/icons/Save';

import RestoreIcon from '@material-ui/icons/Restore';
import { Link } from 'react-router-dom';
import { useCustomForm } from '../../commons/forms/useCustomForm';
import { assetSchema } from './validation';
import { FormAssetContractField, FormAssetInvoiceField, FormAssetLocationField, FormAssetModelField, FormAssetOwnerField, FormDateField, FormNumberField, FormSelectField, FormTextField } from '../../commons/forms/fields/FormFields';


export default function AssetForm({ onSubmit, initialData={}, saveErrors  }) {
    const [ handleSubmit, control ] = useCustomForm(assetSchema, initialData, saveErrors)

    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Hostname" name="hostname" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Tag" name="tag" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Número de Série" name="serialNumber" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormNumberField control={ control } label="Ativo" name="companyIdentification" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormNumberField control={ control } label="IMEI" name="imei" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormNumberField control={ control } label="CHIP" name="chipIdentification" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormTextField control={ control } label="Linha" name="lineIdentification" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormAssetModelField control={ control } name="modelId" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormAssetOwnerField control={ control } name="ownerId" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormAssetLocationField control={ control } name="locationId" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormAssetInvoiceField control={ control } name="invoiceId" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormAssetContractField control={ control } name="contractId" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormSelectField control={ control } label="Status" name="status" defaultValue={ initialData ? initialData.status : '' }>
                            <MenuItem value="ACTIVE">Ativo</MenuItem>
                            <MenuItem value="IN_STOCK">No Estoque</MenuItem>
                            <MenuItem value="BROKEN">Quebrado / Danificado</MenuItem>
                            <MenuItem value="LOANED">Emprestado</MenuItem>
                            <MenuItem value="RETIRED">Retirado / Aposentado</MenuItem>
                        </FormSelectField>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <FormDateField control={control} label="Final da Garantia" name="endOfWarranty" />
                    </Grid>
                </Grid>

                <Grid item sm={12}>
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
                                    pathname: "/assets",
                                    status: {
                                        'message' : {
                                            'type': 'info',
                                            'title': 'Criação Cancelada',
                                            'message': 'A ação foi cancelada e o Ativo não foi criado'
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
            </form>
        </>
    )
}