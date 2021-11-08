import { FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { LocationFilterDialog, ModelFilterDialog, OwnerFilterDialog } from './FilterDialog';
import { useValidCompanyIdentification } from '../../../contexts/components/assets/commons';
import { findUser } from '../../../adapters/user';
import { findLocation } from '../../../adapters/locations';
import { findModel } from '../../../adapters/models';

function AssetOwnerField({ ownerId, onChange }) {
    const [owner, setOwner] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( ownerId && (!owner || owner.id !== ownerId)) {
            findUser(ownerId)
                .then(user => setOwner(user))
        }
       else if (owner && owner.id !== ownerId) {
            onChange(owner.id)
        }
    }, [ owner, ownerId, onChange ])

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ owner.name }
                    readOnly={true}
                    placeholder="Responsável"
                    inputProps={{ 'aria-label': 'Responsável' }}
                />
                <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                    <SearchIcon />
                </IconButton>
            </Paper>

            <OwnerFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedOwner => {
                    setOwner(selectedOwner)
                    setOpenSearch(false)
                }} />
        </>
    )
}

function AssetLocationField({ locationId, onChange }) {
    const [location, setLocation] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( locationId && (!location || location.id !== locationId)) {
            findLocation(locationId)
                .then(loc => setLocation(loc))
        }
        else if (location && location.id !== locationId) {
            onChange(location.id)
        }
    }, [ location, locationId, onChange ])

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ location.title }
                    readOnly={true}
                    placeholder="Localização"
                    inputProps={{ 'aria-label': 'Responsável' }}
                />
                <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                    <SearchIcon />
                </IconButton>
            </Paper>

            <LocationFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedLocation => {
                    setLocation(selectedLocation)
                    setOpenSearch(false)
                }} />
        </>
    )
}

function AssetModelField({ modelId, onChange }) {
    const [model, setModel] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( modelId && (!model || model.id !== modelId)) {
            findModel(modelId)
                .then(mod => setModel(mod))
        }
        else if (model && model.id !== modelId) {
            onChange(model.id)
        }
    }, [ model, modelId, onChange ])

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ model.title }
                    readOnly={true}
                    placeholder="Modelo"
                    inputProps={{ 'aria-label': 'Responsável' }}
                />
                <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                    <SearchIcon />
                </IconButton>
            </Paper>

            <ModelFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedModel => {
                    setModel(selectedModel)
                    setOpenSearch(false)
                }} />
        </>
    )
}

function AssetCompanyIdentificationField({ companyIdentification, onChange, onValidChange }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidCompanyIdentification(onValidChange)

    return (
        <TextField
            label="Identificação"
            value={ companyIdentification }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

function AssetStatusField({ status, onChange }) {
    
    return (
            <FormControl fullWidth>
                <InputLabel id="status-id">Status</InputLabel>
                <Select
                    labelId="status-id"
                    value={status}
                    fullWidth
                    required
                    onChange={ e => { onChange(e.target.value) }}>
                        <MenuItem value="ACTIVE">Ativo</MenuItem>
                        <MenuItem value="DISABLE">Desabilitado</MenuItem>
                        <MenuItem value="DESTROYED">Destroido</MenuItem>
                        <MenuItem value="BROKEN">Quebrado</MenuItem>
                        <MenuItem value="RETIRED">Retirado</MenuItem>
                </Select>
            </FormControl>
    )
}

function AssetChipIdentificationField({ chipIdentification, onChange }) {
    return (
        <TextField
            label="Chip ID"
            value={ chipIdentification }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetLineIdentificationField({ lineIdentification, onChange }) {
    return (
        <TextField
            label="Linha"
            value={ lineIdentification }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}





export { AssetOwnerField, AssetLocationField, 
    AssetModelField, AssetCompanyIdentificationField, AssetStatusField,
    AssetChipIdentificationField, AssetLineIdentificationField }