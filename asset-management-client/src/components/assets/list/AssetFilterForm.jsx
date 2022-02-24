import React, { useState } from 'react'
import { AppBar, Button, Dialog, DialogContent, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Toolbar, Typography } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import CloseIcon from '@material-ui/icons/Close';

export default function AssetFilterForm({ onFormSubmit, showFilter, onCloseFilter }) {
    const [ownerName, setOwnerName] = useState("")
    const [ownerRe, setOwnerRe] = useState("")
    const [locationTitle, setLocationTitle] = useState("")
    const [modelTitle, setModelTitle] = useState("")
    const [modelType, setModelType] = useState("")
    const [contractNumber, setContractNumber] = useState("")
    const [contractVendor, setContractVendor] = useState("")
    const [contractVendorCNPJ, setContractVendorCNPJ] = useState("")
    const [companyIdentification, setCompanyIdentification] = useState("")
    const [status, setStatus] = useState("")
    const [chipIdentification, setChipIdentification] = useState("")
    const [lineIdentification, setLineIdentification] = useState("")

    const [endOfWarranty, setEndOfWarranty] = useState("") 
    const [endOfWarrantyMax, setEndOfWarrantyMax] = useState("") 
    const [modeSearchEndOfWarranty, setModeSearchEndOfWarranty] = useState("") 


    const handleFormSubmit = e => {
        e.preventDefault()

        var data = {
            ownerName,
            ownerRe,
            locationTitle,
            modelTitle,
            modelType,
            contractNumber,
            contractVendor,
            contractVendorCNPJ,
            companyIdentification,
            status,
            chipIdentification,
            lineIdentification,
            endOfWarranty,
            endOfWarrantyMax,
            modeSearchEndOfWarranty
        }

        onFormSubmit(data)
    }

    const clear = () => {
        setOwnerName("")
        setOwnerRe("")
        setLocationTitle("")
        setModelTitle("")
        setModelType("")
        setContractNumber("")
        setContractVendor("")
        setContractVendorCNPJ("")
        setCompanyIdentification("")
        setStatus("")
        setChipIdentification("")
        setLineIdentification("")
        setEndOfWarranty("")
        setEndOfWarrantyMax("")
        setModeSearchEndOfWarranty("")
    }

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
                <form onSubmit={ handleFormSubmit }>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField 
                                label="Responsável" 
                                fullWidth
                                value={ ownerName }
                                onChange={ e => { setOwnerName(e.target.value) }}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                                label="Responsável RE" 
                                fullWidth
                                value={ ownerRe }
                                onChange={ e => { setOwnerRe(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField 
                                label="Modelo" 
                                fullWidth
                                value={ modelTitle }
                                onChange={ e => { setModelTitle(e.target.value) }}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                                label="Tipo" 
                                fullWidth
                                value={ modelType }
                                onChange={ e => { setModelType(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField 
                                label="Localização" 
                                fullWidth
                                value={ locationTitle }
                                onChange={ e => { setLocationTitle(e.target.value) }}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                                label="Identificação" 
                                fullWidth
                                value={ companyIdentification }
                                onChange={ e => { setCompanyIdentification(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField 
                                label="Número de Contrato" 
                                fullWidth
                                value={ contractNumber }
                                onChange={ e => { setContractNumber(e.target.value) }}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                                label="Fornecedor" 
                                fullWidth
                                value={ contractVendor }
                                onChange={ e => { setContractVendor(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="status-id">Status</InputLabel>
                                <Select
                                    labelId="status-id"
                                    value={status}
                                    fullWidth
                                    onChange={ e => { setStatus(e.target.value) }}
                                    >
                                    <MenuItem value="ACTIVE">Ativos</MenuItem>
                                    <MenuItem value="DISABLE">Desabilitados</MenuItem>
                                    <MenuItem value="DESTROYED">Destruidos</MenuItem>
                                    <MenuItem value="BROKEN">Quebrados</MenuItem>
                                    <MenuItem value="RETIRED">Retirados</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                                label="Chip" 
                                fullWidth
                                value={ chipIdentification }
                                onChange={ e => { setChipIdentification(e.target.value) }}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField 
                                label="CNPJ Fornecedor" 
                                fullWidth
                                value={ contractVendorCNPJ }
                                onChange={ e => { setContractVendorCNPJ(e.target.value) }}/>
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                                label="Linha" 
                                fullWidth
                                value={ lineIdentification }
                                onChange={ e => { setLineIdentification(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <TextField 
                                label="Final da Garantia" 
                                type="date"
                                fullWidth
                                value={ endOfWarranty }
                                onChange={ e => { setEndOfWarranty(e.target.value) }}/>
                        </Grid>

                        <Grid item md={4}>
                            <TextField 
                                label="Final da Garantia (Maximo)" 
                                type="date"
                                fullWidth
                                disabled={ modeSearchEndOfWarranty !== 'BETWEEN' }
                                value={ endOfWarrantyMax }
                                onChange={ e => { setEndOfWarrantyMax(e.target.value) }}/>
                        </Grid>

                        <Grid item md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="startsAt-type-id">Tipo de Pesquisa</InputLabel>
                                <Select
                                    labelId="startsAt-type-id"
                                    value={ modeSearchEndOfWarranty }
                                    fullWidth
                                    onChange={ e => { setModeSearchEndOfWarranty(e.target.value) }}>
                                        <MenuItem value="EQUAL">Igual</MenuItem>
                                        <MenuItem value="GREATER_THAN">Maior que</MenuItem>
                                        <MenuItem value="LESS_THAN">Menor Que</MenuItem>
                                        <MenuItem value="BETWEEN">Entre</MenuItem>
                                </Select>
                            </FormControl>
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
                                onClick={() => { clear() }}>
                                    Limpar Campos
                            </Button>    
                        </Grid>
                    </Grid>
                    
                </form>
            </DialogContent>
            
        </Dialog>
    )
}
