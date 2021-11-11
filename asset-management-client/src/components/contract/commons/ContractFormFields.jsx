import { TextField } from '@material-ui/core'
import React from 'react'

function ContractNumberField({ field, onChangeField, readonly }) {
    return (
        <TextField
            label="Número"
            value={ field }
            disabled={ readonly }
            onChange={ e => onChangeField(e.target.value) }
            required
            fullWidth />
    )
}

function ContractVendorField({ field, onChangeField, readonly }) {
    return (
        <TextField
            label="Fornecedor"
            value={ field }
            disabled={ readonly }
            onChange={ e => onChangeField(e.target.value) }
            required
            fullWidth />
    )
}

function ContractVendorCNPJField({ field, onChangeField, readonly }) {
    return (
        <TextField
            label="Fornecedor CNPJ"
            value={ field }
            disabled={ readonly }
            onChange={ e => onChangeField(e.target.value) }
            required
            fullWidth />
    )
}

function ContractStartsAtField({ field, onChangeField, readonly }) {
    return (
        <TextField
            value={ field }
            disabled={ readonly }
            onChange={ e => onChangeField(e.target.value) }
            type="date"
            required
            fullWidth />
    )
}

function ContractEndsAtField({ field, onChangeField, readonly }) {
    return (
        <TextField
            value={ field }
            disabled={ readonly }
            onChange={ e => onChangeField(e.target.value) }
            type="date"
            required
            fullWidth />
    )
}

export { ContractNumberField, ContractVendorCNPJField, ContractVendorField, ContractStartsAtField, ContractEndsAtField }