import React from 'react'
import { Redirect } from "react-router-dom";

export default function NavPageForwarder({path, msgType, msgTitle, msgMessage}) {
    let message = {
        'type': msgType,
        'title': msgTitle,
        'message': msgMessage
    }

    return <Redirect 
                to={{
                    pathname: path,
                    state: { message }
                }} />
}