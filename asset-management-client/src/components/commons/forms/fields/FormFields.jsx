import React from 'react'
import { FormControl, FormHelperText, Input, InputLabel, Select, TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'
import MaskedInput from 'react-text-mask';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';
import { AssetContractField, AssetInvoiceField, AssetLocationField, AssetModelField, AssetOwnerField } from '../../../assets/commons/AssetFormFields';


function FormTextField({ name, label, control}) {
    return (
        <Controller
            name={ name }
            control={ control }
            defaultValue=""
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <TextField
                    InputLabelProps={{ shrink: true }}
                    label={ label }
                    value={ value }
                    onChange={onChange}
                    error={ !!error }
                    helperText={ error ? error.message : null }
                    fullWidth />
            )}
            />
    )
}

function FormDateField({ name, label, control}) {
    return (
        <Controller
            name={ name }
            control={ control }
            defaultValue=""
            render={ ({ field: { onChange, value }, fieldState: { error } }) => (
                <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ptBR}>
                    <DatePicker 
                        value={value} 
                        onChange={onChange} 
                        fullWidth 
                        format='dd/MM/yyyy'
                        helperText={ error ? error.message : null }
                        label={label} />
                </MuiPickersUtilsProvider>
            )}
            />
    )
}

function FormNumberField({ name, label, control}) {
    return (
        <Controller
            name={ name }
            control={ control }
            defaultValue=""
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <TextField
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label={ label }
                    value={ value }
                    onChange={onChange}
                    error={ !!error }
                    helperText={ error ? error.message : null }
                    fullWidth />
            )}
            />
    )
}

function FormCNPJMaskField({ name, label, control }) {
    const labelId = `${label}-id`

    return (
        <FormControl fullWidth >
            <InputLabel id={ labelId } shrink>{ label }</InputLabel>
            <Controller
                defaultValue=""
                name={ name }
                control={ control }
                render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                    <>
                    <Input
                        value={ value }
                        onChange={ onChange }
                        error={ !!error }
                        id={ labelId }
                        inputComponent={CNPJMaskCustom} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                    </>
                )}
                />
        </FormControl>
    )
}

function CNPJMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',/\d/,/\d/,/\d/,/\d/, '-',/\d/,/\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

function FormSelectField({ name, label, control, children, defaultValue }) {
    const labelId = `${label}-id`

    return (
        <FormControl fullWidth >
            <InputLabel id={ labelId } shrink>{ label }</InputLabel>
            <Controller
                name={ name }
                control={ control }
                defaultValue={ defaultValue }
                render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                    <>
                        <Select
                            labelId={ labelId }
                            value={ value }
                            onChange={ onChange }
                            fullWidth
                            error={ !!error }>
                            
                            { children }
                        </Select>
                        <FormHelperText>{ error ? error.message : null }</FormHelperText>
                    </>
                )}
            />
            
            
        </FormControl>

       
    )
}

function FormAssetModelField({ name, control }) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <FormControl fullWidth error={ !!error }>
                    <AssetModelField modelId={value} onChange={onChange} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                </FormControl>
            )} />
    )
}

function FormAssetOwnerField({ name, control }) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <FormControl fullWidth error={ !!error }>
                    <AssetOwnerField ownerId={value} onChange={onChange} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                </FormControl>
            )} />
    )
}

function FormAssetLocationField({ name, control }) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <FormControl fullWidth error={ !!error }>
                    <AssetLocationField locationId={value} onChange={onChange} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                </FormControl>
            )} />
    )
}

function FormAssetContractField({ name, control }) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <FormControl fullWidth error={ !!error }>
                    <AssetContractField contractId={value} onChange={onChange} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                </FormControl>
            )} />
    )
}

function FormAssetInvoiceField({ name, control }) {
    return (
        <Controller
            name={ name }
            control={ control }
            render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                <FormControl fullWidth error={ !!error }>
                    <AssetInvoiceField invoiceId={value} onChange={onChange} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                </FormControl>
            )} />
    )
}


export { FormTextField, FormNumberField, FormSelectField, FormCNPJMaskField, FormDateField, 
    FormAssetContractField, FormAssetInvoiceField, FormAssetLocationField, FormAssetModelField, FormAssetOwnerField }