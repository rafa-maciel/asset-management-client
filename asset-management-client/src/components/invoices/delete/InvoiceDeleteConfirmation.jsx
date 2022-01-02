import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { Link } from 'react-router-dom'

import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';
import { useInvoiceDeleteConfirmationContext } from '../../../contexts/components/invoices/delete';

export default function InvoiceDeleteConfirmation({ invoice, onDelete }) {
    const [ invoiceDelete ] = useInvoiceDeleteConfirmationContext()

    const handleFormSubmit = e => {
        e.preventDefault()
        invoiceDelete(invoice.id, onDelete)
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Alert variant="filled" severity="warning">
                        Você tem certeza que deseja remover esta nota fiscal [{ invoice ? invoice.number : '#Error'}]? <br />
                        <Typography component="small" variant="caption">Esta ação não poderá ser desfeita.</Typography>                
                    </Alert>
                </Grid>
                <Grid item xs={12} md={6}>
                    <form onSubmit={ handleFormSubmit }>
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="secondary"
                            startIcon={<DeleteIcon />}>
                            Deletar Nota Fiscal
                        </Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button
                        component={ Link }
                        to={{
                            pathname: "/invoices",
                            status: {
                                'message' : {
                                    'type': 'info',
                                    'title': 'Deleção Cancelada',
                                    'message': 'A ação foi cancelada e a nota fiscal não foi deletada'
                                }
                            }
                            }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        startIcon={<RestoreIcon />}>
                            Voltar para lista de notas fiscais
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}