import React from 'react'
import AuthenticationForm from '../../../../components/authentication/AuthenticationForm/AuthenticationForm.jsx'

export default function AuthenticationPage( { onSuccessAuthenticated } ) {

    return (
        <AuthenticationForm onSuccessfullyAuthenticated={() => {onSuccessAuthenticated()}}/>
    )
    
}