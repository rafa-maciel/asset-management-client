import React from 'react'
import { AppBar, Button, Dialog, DialogContent, Grid, IconButton, MenuItem, Toolbar, Typography } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import CloseIcon from '@material-ui/icons/Close';
import { useAssetFilterForm } from '../../../contexts/components/assets/list/filterForm';
import { FormCNPJMaskField, FormDateField, FormNumberField, FormSelectField, FormTextField } from '../../commons/forms/fields/FormFields';

export default function AssetFilterForm({ onFormSubmit, showFilter, onCloseFilter }) {
    const [ handleSubmit, control, reset ] = useAssetFilterForm()

    return (
        <Dialog open={ showFilter } onClose={ onCloseFilter }>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={ () => { onCloseFilter()}} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Filtrar Tabela de Ativos
                    </Typography>
                </Toolbar>
            </AppBar>
            <DialogContent>
                <form onSubmit={ handleSubmit(onFormSubmit) }>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Hostname" name="hostname" />
                        </Grid>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Número de Série" name="serialNumber" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Responsável" name="ownerName" />
                        </Grid>
                        <Grid item md={6}>
                            <FormNumberField control={ control } label="RE do Responsável" name="ownerRe" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Modelo" name="modelTitle" />
                        </Grid>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Tipo" name="modelType" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Localização" name="locationTitle" />
                        </Grid>
                        <Grid item md={6}>
                            <FormNumberField control={ control } label="Ativo" name="companyIdentification" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormNumberField control={ control } label="Número de Contrato" name="contractNumber" />
                        </Grid>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Fornecedor do Contrato" name="contractVendor" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormSelectField control={ control } label="Status" name="status" defaultValue="">
                                <MenuItem value="" disabled={true}>Selecione</MenuItem>
                                <MenuItem value="ACTIVE">Ativo</MenuItem>
                                <MenuItem value="IN_STOCK">No Estoque</MenuItem>
                                <MenuItem value="BROKEN">Quebrado / Danificado</MenuItem>
                                <MenuItem value="LOANED">Emprestado</MenuItem>
                                <MenuItem value="RETIRED">Retirado / Aposentado</MenuItem>
                            </FormSelectField>
                        </Grid>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Chip" name="chipIdentification" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormCNPJMaskField control={control} label="CNPJ" name="contractVendorCNPJ" />
                        </Grid>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="Linha" name="lineIdentification" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormTextField control={ control } label="TAG" name="tag" />
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <FormDateField control={control} label="Final da Garantia" name="endOfWarranty" />
                        </Grid>

                        <Grid item md={4}>
                            <FormDateField control={control} label="Final da Garantia (Max)" name="endOfWarrantyMax" />
                        </Grid>

                        <Grid item md={4}>
                            <FormSelectField control={ control } label="Tipo de Busca" name="modeSearchEndOfWarranty" defaultValue="">
                                <MenuItem value="" disabled={true}>Selecione</MenuItem>
                                <MenuItem value="EQUAL">Igual</MenuItem>
                                <MenuItem value="GREATER_THAN">Maior que</MenuItem>
                                <MenuItem value="LESS_THAN">Menor Que</MenuItem>
                                <MenuItem value="BETWEEN">Entre</MenuItem>
                            </FormSelectField>
                        </Grid>
                    </Grid>
                    
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={6}>
                            <Button 
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                startIcon={ <SearchIcon /> }>
                                    Filtrar
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Button
                                type="button" 
                                fullWidth
                                variant="contained"
                                color="secondary"
                                startIcon={ <LayersClearIcon /> }
                                onClick={() => { reset({}) }}>
                                    Limpar Campos
                            </Button>    
                        </Grid>
                    </Grid>
                    
                </form>
            </DialogContent>
            
        </Dialog>
    )
}
