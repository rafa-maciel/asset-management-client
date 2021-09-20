import { Button, Dialog, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import LayersClearIcon from '@material-ui/icons/LayersClear';

export default function UserAccountSearchForm({ onFormSubmit, showModal, onCloseModal }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [profile, setProfile] = useState("")
    const [enabled, setEnabled] = useState("")

    const profileOptions = ['', 'ADMIN', 'IT', 'RH']

    const handleFormSubmit = event => {
        event.preventDefault()
        var data = {
            email,
            name,
            profile,
            enabled
        }

        onFormSubmit(data)
    }

    const clear = () => {
        setName('')
        setEmail('')
        setProfile('')
        setEnabled('')
    }

    return (
        <>
            <Dialog open={showModal} onClose={ onCloseModal }>
                <DialogTitle>Filtrar pesquisa de Contas de Clients</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleFormSubmit}>
                        <Grid container spacing={3}>
                            <Grid item md={6}>
                                <TextField 
                                    label="E-mail" 
                                    fullWidth
                                    value={ email }
                                    onChange={ e => { setEmail(e.target.value) }}/>
                            </Grid>

                            <Grid item md={6}>
                                <TextField 
                                    label="Nome" 
                                    fullWidth
                                    defaultValue={ name }
                                    onChange={e => { setName(e.target.value) }}/>
                            </Grid>

                            <Grid item md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="perfil-label">Perfis</InputLabel>
                                    <Select
                                        fullWidth
                                        labelId="perfil-label"
                                        value={ profile }
                                        onChange={ e => { setProfile( e.target.value )}}>
                                            
                                            <MenuItem value="">Todos</MenuItem>
                                            { profileOptions.map((val, index) => <MenuItem key={index} value={val}>{ val }</MenuItem>) }
                                    </Select>
                                </FormControl>
                                
                            </Grid>

                            <Grid item md={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="status-label">Status</InputLabel>
                                    <Select
                                        fullWidth
                                        value={ enabled }
                                        labelId="status-label"
                                        onChange={ e => { setEnabled( e.target.value )}}>
                                            
                                            <MenuItem value="">Todos</MenuItem>
                                            <MenuItem value={false}>Inativos</MenuItem>
                                            <MenuItem value={true}>Ativos</MenuItem>
                                    </Select>
                                </FormControl>
                                
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={4} alignContent="center">
                            <Grid item xs={6} md={6} alignItems="center">
                                <Button 
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    startIcon={ <SearchIcon /> }>
                                        Filtrar Pesquisa
                                </Button>
                            </Grid>
                            <Grid item xs={6} md={6} alignContent="center">
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