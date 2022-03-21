import React, { useState } from 'react'
import { Button, Dialog, DialogContent, DialogTitle, Grid, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { searchUsers } from '../../../../adapters/user';


import SaveIcon from '@material-ui/icons/Save';
import { FilterTextField } from './FilterFields';

function OwnerFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [users, setUsers] = useState([])
    const [ params, setParams ] = useState({notStatus: "INACTIVE"})
    
    const handleChange = (name, value) => {
        var newParams = {...params}
        newParams[name] = value
        setParams(newParams)
    }

    const filter = () => {
        if ( params )
            searchUsers(params)
                .then(resp => resp.content)
                .then(data => {
                    setUsers(data)
                })
    }

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Responsáveis</DialogTitle>
            <DialogContent>
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="name" label="Nome" onChange={(name, value) => handleChange(name, value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="re" label="RE" onChange={(name, value) => handleChange(name, value)} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FilterTextField name="department" label="Department" onChange={(name, value) => handleChange(name, value)} />
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
                    {users.map((user) => (
                        <ListItem button onClick={() => onSelect(user)} key={user.id}>
                            <ListItemText 
                                primary={user.name} 
                                secondary={user.department}/>
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
      );
}

export { OwnerFilterDialog }