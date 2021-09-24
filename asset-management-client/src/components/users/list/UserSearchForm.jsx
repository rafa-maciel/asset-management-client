import { Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';

export default function UserSearchForm({ onFormSubmit, showModal, onCloseModal }) {
    const [name, setName] = useState("")
    const [re, setRe] = useState("")
    const [department, setDepartment] = useState("")
    const [status, setStatus] = useState("")

    const handleFormSubmit = event => {
        event.preventDefault()
        var data = {
            name,
            re,
            department,
            status
        }

        onFormSubmit(data)
    }

    const clear = () => {
        setName("")
        setRe("")
        setDepartment("")
        setStatus("")
    }

    return (
        <>
            <Dialog open={showModal} onClose={ onCloseModal }>
                <DialogTitle>Filtrar pesquisa de Usuários</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={3}>
                            <Grid item md={6}>
                                <TextField 
                                    label="Nome" 
                                    fullWidth
                                    value={ name }
                                    onChange={ e => { setName(e.target.value) }}/>
                            </Grid>

                            <Grid item md={6}>
                                <TextField 
                                    label="RE" 
                                    fullWidth
                                    defaultValue={ re }
                                    onChange={e => { setRe(e.target.value) }}/>
                            </Grid>

                            <Grid item md={6}>
                                <TextField 
                                    label="Departamento" 
                                    fullWidth
                                    defaultValue={ department }
                                    onChange={e => { setDepartment(e.target.value) }}/>
                                
                            </Grid>

                            <Grid item md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="status-label">Status</InputLabel>
                                    <Select
                                        fullWidth
                                        value={ status }
                                        labelId="status-label"
                                        onChange={ e => { setStatus( e.target.value )}}>
                                            
                                            <MenuItem value="">Todos</MenuItem>
                                            <MenuItem value="INACTIVE">Inativos</MenuItem>
                                            <MenuItem value="ACTIVE">Ativos</MenuItem>
                                            <MenuItem value="LICENSE">Em Licença</MenuItem>
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
                                        Filtrar Pesquisa
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