import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { UserImportForm } from '../../../components/users/import'

export default function UserImport() {
    
    return (
        <Paper>
            <Typography variant="h3" component="h1">Importar Usuários do Excel</Typography>
            <UserImportForm />
        </Paper>
    )
}