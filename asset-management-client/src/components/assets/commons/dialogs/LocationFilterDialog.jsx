import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';


import SaveIcon from '@material-ui/icons/Save';
import { FilterTextField } from './FilterFields';
import { searchLocations } from '../../../../adapters/locations';

function LocationFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [locations, setLocations] = useState([])
    const [ params, setParams ] = useState({})
    
    const handleChange = (name, value) => {
        var newParams = {...params}
        newParams[name] = value
        setParams(newParams)
    }

    const filter = () => {
        searchLocations(params)
            .then(resp => resp.content)
            .then(data => {
                setLocations(data)
            })
}

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Localizações</DialogTitle>
            <DialogContent style={{"min-width": "500px"}}>
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12}>
                            <FilterTextField name="title" label="Nome" onChange={(name, value) => handleChange(name, value)} />
                        </Grid>
                    </Grid>


                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Button type="button"
                                onClick={filter}
                                fullWidth
                                size="medium"
                                variant="contained"
                                color="primary"
                                startIcon={ <SaveIcon /> }>
                                    Pesquisar
                            </Button>
                        </Grid>
                    </Grid>
                    
                </>
                
                <Typography component="p">Resultado da Busca</Typography>
                <List>
                    {locations.map((location) => (
                        <ListItem button onClick={() => onSelect(location)} key={location.id}>
                            <ListItemText 
                                primary={location.title} 
                                secondary={location.notes}/>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
      );
}

export { LocationFilterDialog }