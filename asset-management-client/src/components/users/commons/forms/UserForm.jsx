import React from 'react'
import { Button, Grid, MenuItem } from '@material-ui/core'
import { FormNumberField, FormSelectField, FormTextField } from '../../../commons/forms/fields/FormFields'
import { useCustomForm } from '../../../commons/forms/useCustomForm';
import { userSchema } from '../validation';
import { Link } from 'react-router-dom';

import SaveIcon from '@material-ui/icons/Save';
import RestoreIcon from '@material-ui/icons/Restore';

export default function UserForm({ onSubmit, initialData={}, saveErrors }) {
    const [ handleSubmit, control ] = useCustomForm(userSchema, initialData, saveErrors)
    const statusSelectOptions = {
        'ACTIVE': 'Ativo',
        'INACTIVE': 'Inativo',
        'LICENSE': 'Licença / Afastado'
    }

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormTextField control={ control } label="Nome" name="name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormNumberField control={ control } label="RE" name="re" />

                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormTextField control={ control } label="Departamento" name="department" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormSelectField control={ control } label="Status" name="status" options={ statusSelectOptions }>
                        <MenuItem value="ACTIVE">Ativo</MenuItem>
                        <MenuItem value="INACTIVE">Inativo</MenuItem>
                        <MenuItem value="LICENSE">Licença</MenuItem>
                    </FormSelectField>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Button type="submit"
                                fullWidth
                                size="medium"
                                variant="contained"
                                color="primary"
                                startIcon={ <SaveIcon /> }>
                                    Salvar
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                component={ Link }
                                to={{
                                    pathname: "/users",
                                    status: {
                                        'message' : {
                                            'type': 'info',
                                            'title': 'Criação Cancelada',
                                            'message': 'A ação foi cancelada e o usuário não foi criado'
                                        }
                                    }
                                    }}
                                fullWidth
                                variant="contained"
                                color="secondary"
                                startIcon={<RestoreIcon />}>
                                    Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        
        </form>
    )

}