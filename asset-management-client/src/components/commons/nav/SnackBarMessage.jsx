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

function SnackbarPageMessage({ show, message, onClose }) {

    return (
        <Snackbar open={show} autoHideDuration={6000} onClose={ onClose }>
            <Alert severity={ message && message.type ? message.type : 'info' }>
                <AlertTitle>{ message && message.title ? message.title : 'No Title' }</AlertTitle>
                <strong>{ message && message.message ? message.message : 'No Message' }</strong>
            </Alert>
        </Snackbar>
    )
}




export { SnackbarPageMessage }