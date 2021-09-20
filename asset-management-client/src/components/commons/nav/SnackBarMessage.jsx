import { Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import React from 'react'

export default function SnackBarMessage({ show, type, title, message, onClose }) {

    return (
        <Snackbar open={show} autoHideDuration={6000} onClose={ onClose }>
            <Alert severity={ type }>
                <AlertTitle>{ title }</AlertTitle>
                <strong>{ message }</strong>
            </Alert>
        </Snackbar>
    )
}