import React from 'react'
import AuthenticationForm from '../../../../components/authentication/AuthenticationForm/AuthenticationForm.jsx'

export default function AuthenticationPage( { onSuccessAuthenticated, redirectedFromLogout } ) {

    return (
        <AuthenticationForm onSuccessfullyAuthenticated={() => {onSuccessAuthenticated()}} redirectedFromLogout={ redirectedFromLogout }/>
    )
    
}