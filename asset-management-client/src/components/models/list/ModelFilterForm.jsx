import { Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@material-ui/core'
import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';

export default function ModelFilterForm({ onFormSubmit, showFilter, onCloseFilter }) {
    const [title, setTitle] = useState("")
    const [brand, setBrand] = useState("")
    const [type, setType] = useState("")

    const handleFormSubmit = event => {
        event.preventDefault()

        var data = {
            title,
            brand,
            type
        }

        onFormSubmit(data)
    }

    const clear = () => {
        setTitle("")
        setBrand("")
        setType("")
    }

    return (
        <>
            <Dialog open={ showFilter } onClose={ onCloseFilter }>
                <DialogTitle>Filtrar Tabela de Modelos</DialogTitle>
                <DialogContent>
                    <form onSubmit={ handleFormSubmit }>
                        <Grid container spacing={3}>
                            <Grid item md={6}>
                                <TextField 
                                    label="Titulo" 
                                    fullWidth
                                    value={ title }
                                    onChange={ e => { setTitle(e.target.value) }}/>
                            </Grid>

                            <Grid item md={6}>
                                <TextField 
                                    label="Marca" 
                                    fullWidth
                                    defaultValue={ brand }
                                    onChange={e => { setBrand(e.target.value) }}/>
                            </Grid>

                            <Grid item md={6}>
                                <TextField 
                                    label="Tipo de Ativo" 
                                    fullWidth
                                    defaultValue={ type }
                                    onChange={e => { setType(e.target.value) }}/>
                                
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
        </>
    )
}