import { TextField } from '@material-ui/core'
import React from 'react'

function InvoiceNumberField({ field, onChangeField, readonly }) {
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

function InvoiceVendorField({ field, onChangeField, readonly }) {
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

function InvoiceVendorCNPJField({ field, onChangeField, readonly }) {
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

function InvoiceStartsAtField({ field, onChangeField, readonly }) {
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

function InvoiceEndsAtField({ field, onChangeField, readonly }) {
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

export { InvoiceNumberField, InvoiceVendorCNPJField, InvoiceVendorField, InvoiceStartsAtField, InvoiceEndsAtField}