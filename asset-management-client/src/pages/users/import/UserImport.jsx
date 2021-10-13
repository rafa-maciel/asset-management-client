import React from 'react'
import { Typography } from '@material-ui/core'
import { UserImportForm } from '../../../components/users/import'

export default function UserImport() {
    
    return (
        <>
            <Typography variant="h3" component="h1">Importar Usuários do Excel</Typography>
            <UserImportForm />
        </>
    )
}