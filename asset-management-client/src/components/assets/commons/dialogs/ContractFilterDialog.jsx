import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';


import SaveIcon from '@material-ui/icons/Save';
import { FilterTextField } from './FilterFields';
import { searchContracts } from '../../../../adapters/contract';


function ContractFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [contracts, setContracts] = useState([])
    const [ params, setParams ] = useState({})
    
    const handleChange = (name, value) => {
        var newParams = {...params}
        newParams[name] = value
        setParams(newParams)
    }

    const filter = () => {
        searchContracts(params)
            .then(resp => resp.content)
            .then(data => {
                setContracts(data)
            })
}

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Contratos</DialogTitle>
            <DialogContent style={{"min-width": "500px"}}>
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="number" label="Número" onChange={(name, value) => handleChange(name, value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="vendor" label="Fornecedor" onChange={(name, value) => handleChange(name, value)} />
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
                    {contracts.map((contract) => (
                        <ListItem button onClick={() => onSelect(contract)} key={contract.id}>
                            <ListItemText 
                                primary={contract.number} 
                                secondary={contract.vendor}/>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
      );
}

export { ContractFilterDialog }