import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
const usePageMessage = () => {
    const [message, setMessage] = useState(null)
    const [showMessage, setShowMessage] = useState(false)

    const location = useLocation()

    useEffect(() => {
        if (location && location.state && location.state.message) {
            var msg = location.state.message
            addMessage(msg.type, msg.title, msg.message)
        }
    }, [ location ])

    const addMessage = (type, title, message) => {
        setMessage({type, title, message})
        setShowMessage(true)
    }

    const hideMessage = () => {
        setShowMessage(false)
    }

    return [message, addMessage, showMessage, hideMessage]
}

export { usePageMessage }