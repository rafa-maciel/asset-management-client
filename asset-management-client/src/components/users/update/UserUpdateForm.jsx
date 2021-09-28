import { Button, Grid } from '@material-ui/core'
import React from 'react'
import { useFormInvalidCheck } from '../../../contexts/commons/useFormsUtils'
import { useUserFormUpdate } from '../../../contexts/components/users/update'
import { UserDepartmentField, UserNameField, UserReField, UserStatusField } from '../commons'

import SaveIcon from '@material-ui/icons/Save';

export default function UserUpdateForm({ initialData, userId, onUpdate }) {
    const [
        name, setName, 
        re, setRe, 
        department, setDepartment, 
        status, setStatus, 
        userUpdate] = useUserFormUpdate(initialData, userId)

    const [ checkInvalidField, invalidForm ] = useFormInvalidCheck()
    
    return (
        <>
            <form onSubmit={ e => userUpdate(e, onUpdate) }>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                       <UserNameField
                            onValidChange={ v => checkInvalidField(v, 'name') }
                            name={ name }
                            onChange={ setName } />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <UserReField 
                            onValidChange={ v => checkInvalidField(v, 're') }
                            re={ re }
                            onChange={ setRe } />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <UserDepartmentField 
                            department={ department }
                            onValidChange={ v => checkInvalidField(v, 'department') }
                            onChange={ setDepartment }/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <UserStatusField 
                            status={ status }
                            onValidChange={ v => checkInvalidField(v, 'status') }
                            onChange={ setStatus } />
                    </Grid>

                    <Grid item>
                        <Button type="submit"
                            fullWidth
                            size="medium"
                            disabled={ invalidForm }
                            variant="contained"
                            color="primary"
                            startIcon={ <SaveIcon /> }>
                                Atualizar
                        </Button>
                    </Grid>
                </Grid>
            </form>
            
        </>
    )

}