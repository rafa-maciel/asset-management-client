import { FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { ContractFilterDialog, InvoiceFilterDialog, LocationFilterDialog, ModelFilterDialog, OwnerFilterDialog } from './FilterDialog';
import { useValidCompanyIdentification } from '../../../contexts/components/assets/commons';
import { findUser } from '../../../adapters/user';
import { findLocation } from '../../../adapters/locations';
import { findModel } from '../../../adapters/models';
import { findContract } from '../../../adapters/contract';
import { findInvoice } from '../../../adapters/invoices';

function AssetOwnerField({ ownerId, onChange, readOnly=false }) {
    const [owner, setOwner] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( ownerId && (!owner && owner.id !== ownerId)) {
            findUser(ownerId)
                .then(user => setOwner(user))
        }
       else if (owner && owner.id !== ownerId) {
            onChange(owner.id)
        }
    }, [ owner, ownerId, onChange ])

    const nonReadOnlyIconButton = () => {
        if (readOnly) return null;
        return (
            <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
            </IconButton>
        )
    }
    
    const nonReadOnlyFilterDialog = () => {
        if (readOnly) return null;
        return (
            <OwnerFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedOwner => {
                    setOwner(selectedOwner)
                    setOpenSearch(false)
                }} />
        )
    }

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ owner.name }
                    disabled={true}
                    placeholder="Responsável"
                    inputProps={{ 'aria-label': 'Responsável' }}
                />
                { nonReadOnlyIconButton() }
            </Paper>

            { nonReadOnlyFilterDialog() }
        </>
    )
}

function AssetLocationField({ locationId, onChange, readOnly=false }) {
    const [location, setLocation] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( locationId && (!location && location.id !== locationId)) {
            findLocation(locationId)
                .then(loc => setLocation(loc))
        }
        else if (location && location.id !== locationId) {
            onChange(location.id)
        }
    }, [ location, locationId, onChange ])

    const nonReadOnlyIconButton = () => {
        if (readOnly) return null;
        return (
            <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
            </IconButton>
        )
    }

    const nonReadOnlyFilterDialog = () => {
        if (readOnly) return null;
        return (
            <LocationFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedLocation => {
                    setLocation(selectedLocation)
                    setOpenSearch(false)
                }} />
        )
    }

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ location.title }
                    disabled={true}
                    placeholder="Localização"
                    inputProps={{ 'aria-label': 'Responsável' }}
                />
                { nonReadOnlyIconButton() }
            </Paper>

            { nonReadOnlyFilterDialog() }
        </>
    )
}

function AssetModelField({ modelId, onChange, readOnly=false }) {
    const [model, setModel] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( modelId && (!model && model.id !== modelId)) {
            findModel(modelId)
                .then(mod => setModel(mod))
        }
        else if (model && model.id !== modelId) {
            onChange(model.id)
        }
    }, [ model, modelId, onChange ])

    const nonReadOnlyIconButton = () => {
        if (readOnly) return null;
        return (
            <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
            </IconButton>
        )
    }

    const nonReadOnlyFilterDialog = () => {
        if (readOnly) return null;
        return (
            <ModelFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedModel => {
                    setModel(selectedModel)
                    setOpenSearch(false)
                }} />
        )
    }

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ model.title }
                    disabled={true}
                    placeholder="Modelo"
                    inputProps={{ 'aria-label': 'Responsável' }}
                />
                { nonReadOnlyIconButton() }
            </Paper>

            { nonReadOnlyFilterDialog() }
        </>
    )
}

function AssetCompanyIdentificationField({ companyIdentification, onChange, onValidChange, readOnly=false  }) {
    const [invalidMessage, fieldInvalid, validate ] = useValidCompanyIdentification(onValidChange)

    return (
        <TextField
            label="Identificação"
            value={ companyIdentification }
            onChange={ e => onChange(e.target.value) }
            error={ fieldInvalid }
            disabled={ readOnly }
            helperText={ fieldInvalid ? invalidMessage : ''}
            required
            onBlur={ e => validate(e.target.value) }
            fullWidth />
    )
}

function AssetStatusField({ status, onChange, readOnly=false  }) {
    
    return (
            <FormControl fullWidth disabled={readOnly}>
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

function AssetChipIdentificationField({ chipIdentification, onChange, readOnly=false  }) {
    return (
        <TextField
            label="Chip ID"
            disabled={ readOnly }
            value={ chipIdentification }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetLineIdentificationField({ lineIdentification, onChange, readOnly=false  }) {
    return (
        <TextField
            label="Linha"
            disabled={ readOnly }
            value={ lineIdentification }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetHostnameField({ hostname, onChange, readOnly=false  }) {
    return (
        <TextField
            label="Hostname"
            value={ hostname }
            disabled={ readOnly }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetSerialNumberField({ serialNumber, onChange, readOnly=false  }) {
    return (
        <TextField
            label="Número de Série"
            value={ serialNumber }
            disabled={ readOnly }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetTagField({ tag, onChange, readOnly=false  }) {
    return (
        <TextField
            label="TAG"
            value={ tag }
            disabled={ readOnly }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetImeiField({ imei, onChange, readOnly=false  }) {
    return (
        <TextField
            label="IMEI"
            value={ imei }
            disabled={ readOnly }
            onChange={ e => onChange(e.target.value) }
            fullWidth />
    )
}

function AssetContractField({ contractId, onChange, readOnly=false }) {
    const [contract, setContract] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( contractId && (!contract && contract.id !== contractId)) {
            findContract(contractId)
                .then(cont => setContract(cont))
        }
        else if (contract && contract.id !== contractId) {
            onChange(contract.id)
        }
    }, [ contract, contractId, onChange ])


    const nonReadOnlyIconButton = () => {
        if (readOnly) return null;
        return (
            <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
            </IconButton>
        )
    }

    const nonReadOnlyFilterDialog = () => {
        if (readOnly) return null;
        return (
            <ContractFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedModel => {
                    setContract(selectedModel)
                    setOpenSearch(false)
                }} />
        )
    }

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ contract.number }
                    disabled={true}
                    placeholder="Contrato"
                    inputProps={{ 'aria-label': 'Contrato' }}
                />
                { nonReadOnlyIconButton() }
            </Paper>

            { nonReadOnlyFilterDialog() }
        </>
    )
}

function AssetInvoiceField({ invoiceId, onChange, readOnly=false }) {
    const [invoice, setInvoice] = useState('')
    const [openSearch, setOpenSearch] = useState(false)
    
    useEffect(() => {
        if( invoiceId && (!invoice && invoice.id !== invoiceId)) {
            findInvoice(invoiceId)
                .then(cont => setInvoice(cont))
        }
        else if (invoice && invoice.id !== invoiceId) {
            onChange(invoice.id)
        }
    }, [ invoice, invoiceId, onChange ])

    const nonReadOnlyIconButton = () => {
        if (readOnly) return null;
        return (
            <IconButton type="button" aria-label="search" onClick={() => setOpenSearch(true)}>
                <SearchIcon />
            </IconButton>
        )
    }

    const nonReadOnlyFilterDialog = () => {
        if (readOnly) return null;
        return (
            <InvoiceFilterDialog 
                showDialog={ openSearch }
                onCloseDialog={ () => setOpenSearch(false)}
                onSelect={ selectedModel => {
                    setInvoice(selectedModel)
                    setOpenSearch(false)
                }} />
        )
    }

    return (
        <>
            <Paper component="form">
                <InputBase
                    required
                    value={ invoice.number }
                    disabled={true}
                    placeholder="Nota Fiscal"
                    inputProps={{ 'aria-label': 'Nota Fiscal' }}
                />
                { nonReadOnlyIconButton() }
            </Paper>

            { nonReadOnlyFilterDialog() }
        </>
    )
}



export { AssetOwnerField, AssetLocationField, 
    AssetModelField, AssetCompanyIdentificationField, AssetStatusField,
    AssetChipIdentificationField, AssetLineIdentificationField, 
    AssetHostnameField, AssetSerialNumberField, AssetTagField,
    AssetContractField, AssetInvoiceField, AssetImeiField }