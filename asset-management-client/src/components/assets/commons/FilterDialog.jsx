import React, { useState } from 'react'
import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText, TextField, Typography } from '@material-ui/core';
import { searchUsers } from '../../../adapters/user';
import { searchLocations } from '../../../adapters/locations';
import { searchModels } from '../../../adapters/models';
import { searchContracts } from '../../../adapters/contract';
import { searchInvoices } from '../../../adapters/invoices';

function OwnerFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [name, setName] = useState("")
    const [users, setUsers] = useState([])

    const filter = () => {
        if (name && name.length > 0)
            searchUsers({name})
                .then(resp => resp.content)
                .then(data => {
                    setUsers(data)
                })
    }

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Responsáveis</DialogTitle>
            <DialogContent>
                <TextField
                    label="Nome"
                    value={ name }
                    onChange={ e => setName(e.target.value) }
                    onKeyUp={ e => { if(e.key === "Enter") filter() }}
                    />
                
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

function LocationFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [title, setTitle] = useState("")
    const [locations, setLocations] = useState([])

    const filter = () => {
        if (title && title.length > 0)
            searchLocations({title})
                .then(resp => resp.content)
                .then(data => {
                    setLocations(data)
                })
    }

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Localizações</DialogTitle>
            <DialogContent>
                <TextField
                    label="Localicação"
                    value={ title }
                    onChange={ e => setTitle(e.target.value) }
                    onKeyUp={ e => { if(e.key === "Enter") filter() }}
                    />
                
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

function ModelFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [title, setTitle] = useState("")
    const [models, setModels] = useState([])

    const filter = () => {
        if (title && title.length > 0)
            searchModels({title})
                .then(resp => resp.content)
                .then(data => {
                    setModels(data)
                })
    }

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Modelos</DialogTitle>
            <DialogContent>
                <TextField
                    label="Modelo"
                    value={ title }
                    onChange={ e => setTitle(e.target.value) }
                    onKeyUp={ e => { if(e.key === "Enter") filter() }}
                    />
                
                <Typography component="p">Resultado da Busca</Typography>
                <List>
                    {models.map((model) => (
                    <ListItem button onClick={() => onSelect(model)} key={model.id}>
                        <ListItemText 
                            primary={model.title} 
                            secondary={model.notes}/>
                    </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
      );
}

function ContractFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [number, setNumber] = useState("")
    const [contracts, setContracts] = useState([])

    const filter = () => {
        if (number && number.length > 0)
            searchContracts({number})
                .then(resp => resp.content)
                .then(data => {
                    setContracts(data)
                })
    }

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Contratos</DialogTitle>
            <DialogContent>
                <TextField
                    label="Número"
                    value={ number }
                    onChange={ e => setNumber(e.target.value) }
                    onKeyUp={ e => { if(e.key === "Enter") filter() }}
                    />
                
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

function InvoiceFilterDialog({ showDialog, onCloseDialog, onSelect }) {
    const [number, setNumber] = useState("")
    const [invoices, setInvoices] = useState([])

    const filter = () => {
        if (number && number.length > 0)
            searchInvoices({number})
                .then(resp => resp.content)
                .then(data => {
                    setInvoices(data)
                })
    }

    return (
        <Dialog onClose={ onCloseDialog } open={ showDialog }>
            <DialogTitle>Filtrar Notas Fiscais</DialogTitle>
            <DialogContent>
                <TextField
                    label="Número"
                    value={ number }
                    onChange={ e => setNumber(e.target.value) }
                    onKeyUp={ e => { if(e.key === "Enter") filter() }}
                    />
                
                <Typography component="p">Resultado da Busca</Typography>
                <List>
                    {invoices.map((invoice) => (
                    <ListItem button onClick={() => onSelect(invoice)} key={invoice.id}>
                        <ListItemText 
                            primary={invoice.number} 
                            secondary={invoice.vendor}/>
                    </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
      );
}

export { OwnerFilterDialog, LocationFilterDialog, ModelFilterDialog, ContractFilterDialog, InvoiceFilterDialog }