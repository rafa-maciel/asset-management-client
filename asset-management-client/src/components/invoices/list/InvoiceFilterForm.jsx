import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';

export default function InvoiceFilterForm({ onFormSubmit, showFilter, onCloseFilter }) {
    const [number, setNumber] = useState("") 
    const [vendor, setVendor] = useState("") 
    const [vendorCNPJ, setVendorCNPJ] = useState("") 

    const [startsAt, setStartsAt] = useState("") 
    const [startsAtMax, setStartsAtMax] = useState("") 
    const [startsAtSearchType, setStartsAtSearchType] = useState("") 

    const [endsAt, setEndsAt] = useState("") 
    const [endsAtMax, setEndsAtMax] = useState("") 
    const [endsAtSearchType, setEndsAtSearchType] = useState("") 
    
    const handleFormSubmit = e => {
        e.preventDefault()

        var data = {
            number,
            vendor,
            vendorCNPJ,
            startsAt,
            startsAtMax,
            startsAtSearchType,
            endsAt,
            endsAtMax,
            endsAtSearchType
        }
        onFormSubmit(data)
    }

    const clear = () => {
        setNumber("")
        setVendor("")
        setVendorCNPJ("")
        setStartsAt("")
        setStartsAtMax("")
        setStartsAtSearchType("")
        setEndsAt("")
        setEndsAtMax("")
        setEndsAtSearchType("")
    }

    return (
        <Dialog open={ showFilter } onClose={ onCloseFilter }>
            <DialogTitle>Filtrar Tabela de Notas Fiscais</DialogTitle>
            <DialogContent>
                <form onSubmit={ handleFormSubmit }>
                    <Grid container spacing={3}>
                        <Grid item md={12}>
                            <TextField 
                                label="Número" 
                                fullWidth
                                value={ number }
                                onChange={ e => { setNumber(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <TextField 
                                label="Fornecedor" 
                                fullWidth
                                value={ vendor }
                                onChange={ e => { setVendor(e.target.value) }}/>
                        </Grid>

                        <Grid item md={6}>
                            <TextField 
                                label="Forncedor CNPJ" 
                                fullWidth
                                value={ vendorCNPJ }
                                onChange={ e => { setVendorCNPJ(e.target.value) }}/>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <TextField 
                                label="Data de Inicio" 
                                type="date"
                                fullWidth
                                value={ startsAt }
                                onChange={ e => { setStartsAt(e.target.value) }}/>
                        </Grid>

                        <Grid item md={4}>
                            <TextField 
                                label="Data de Inicio (Maximo)" 
                                type="date"
                                fullWidth
                                disabled={ startsAtSearchType !== 'BETWEEN' }
                                value={ startsAtMax }
                                onChange={ e => { setStartsAtMax(e.target.value) }}/>
                        </Grid>

                        <Grid item md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="startsAt-type-id">Tipo de Pesquisa</InputLabel>
                                <Select
                                    labelId="startsAt-type-id"
                                    value={ startsAtSearchType }
                                    fullWidth
                                    onChange={ e => { setStartsAtSearchType(e.target.value) }}>
                                        <MenuItem value="EQUAL">Igual</MenuItem>
                                        <MenuItem value="GREATER_THAN">Maior que</MenuItem>
                                        <MenuItem value="LESS_THAN">Menor Que</MenuItem>
                                        <MenuItem value="BETWEEN">Entre</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <TextField 
                                label="Data de Termino" 
                                type="date"
                                fullWidth
                                value={ endsAt }
                                onChange={ e => { setEndsAt(e.target.value) }}/>
                        </Grid>

                        <Grid item md={4}>
                            <TextField 
                                label="Data de Termino (Maximo)" 
                                type="date"
                                fullWidth
                                disabled={ endsAtSearchType !== 'BETWEEN' }
                                value={ endsAtMax }
                                onChange={ e => { setEndsAtMax(e.target.value) }}/>
                        </Grid>

                        <Grid item md={4}>
                            <FormControl fullWidth>
                                <InputLabel id="endsAt-type-id">Tipo de Pesquisa</InputLabel>
                                <Select
                                    labelId="endsAt-type-id"
                                    value={ endsAtSearchType }
                                    fullWidth
                                    onChange={ e => { setEndsAtSearchType(e.target.value) }}>
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