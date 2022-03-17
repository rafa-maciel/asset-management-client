import React from 'react'
import { FormControl, FormHelperText, Input, InputLabel, Select, TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'
import MaskedInput from 'react-text-mask';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';


function FormTextField({ name, label, control}) {
    return (
        <Controller
            name={ name }
            control={ control }
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

function FormMaskField({ name, label, control, mask }) {
    const labelId = `${label}-id`

    return (
        <FormControl fullWidth >
            <InputLabel id={ labelId } shrink>{ label }</InputLabel>
            <Controller
                name={ name }
                control={ control }
                render={ ({ field: { onChange, value}, fieldState: { error } }) => (
                    <>
                    <Input
                        value={ value }
                        onChange={ onChange }
                        error={ !!error }
                        id={ labelId }
                        inputComponent={TextMaskCustom} />
                    <FormHelperText>{ error ? error.message : null }</FormHelperText>
                    </>
                )}
                />
        </FormControl>
    )
}

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/[1-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',/\d/,/\d/,/\d/,/\d/, '-',/\d/,/\d/]}
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

export { FormTextField, FormNumberField, FormSelectField, FormMaskField, FormDateField }