import React from 'react'
import AuthenticationForm from '../../../components/authenticationComponents/AuthenticationForm/AuthenticationForm.jsx'

export default function AuthenticationPage( { onSuccessAuthenticated } ) {

    return (
        <AuthenticationForm onSuccessfullyAuthenticated={() => {onSuccessAuthenticated()}}/>
    )
    
}