import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, Paper, TextField, Typography } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';

import './style.css'

export default function LocationFilterForm({ onFormSubmit, showFilter, onCloseFilter }) {
    const [title, setTitle] = useState("")
    
    const handleFormSubmit = e => {
        e.preventDefault()

        var data = {
            title
        }

        onFormSubmit(data)
    }

    const clear = () => {
        setTitle("")
    }

    return (
        <Dialog open={ showFilter } onClose={ onCloseFilter } className="filter-dialog">
            {/* <DialogTitle>Filtrar Tabela de Localizações</DialogTitle> */}
            <DialogContent className="location-filter-form-dialog">
                    <Typography variant="h5">Filtro de localizações</Typography>
                
                    <form onSubmit={ handleFormSubmit } className="form-filter">
                        <Grid container spacing={3}>
                            <Grid item md={12}>
                                <TextField 
                                    label="Titulo" 
                                    fullWidth
                                    value={ title }
                                    onChange={ e => { setTitle(e.target.value) }}/>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={4} className="dialog-buttons">
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
                                        Limpar
                                </Button>    
                            </Grid>
                        </Grid>
                    </form>
            </DialogContent>
            
        </Dialog>
    )
    
}