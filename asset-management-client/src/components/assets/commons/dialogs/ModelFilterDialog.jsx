import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';


import SaveIcon from '@material-ui/icons/Save';
import { FilterTextField } from './FilterFields';
import { searchModels } from '../../../../adapters/models';


function ModelFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [models, setModels] = useState([])
    const [ params, setParams ] = useState({})
    
    const handleChange = (name, value) => {
        var newParams = {...params}
        newParams[name] = value
        setParams(newParams)
    }

    const filter = () => {
        searchModels(params)
            .then(resp => resp.content)
            .then(data => {
                setModels(data)
            })
}

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Localizações</DialogTitle>
            <DialogContent style={{"min-width": "500px"}}>
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="title" label="Modelo" onChange={(name, value) => handleChange(name, value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="brand" label="Marca" onChange={(name, value) => handleChange(name, value)} />
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
                    {models.map((model) => (
                        <ListItem button onClick={() => onSelect(model)} key={model.id}>
                            <ListItemText 
                                primary={model.title} 
                                secondary={model.brand}/>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
      );
}

export { ModelFilterDialog }