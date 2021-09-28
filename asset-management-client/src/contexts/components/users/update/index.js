import { useEffect, useState } from "react"
import { updateUser } from "../../../../adapters/user"

function useUserFormUpdate(initialData, userId) {
    const [name, setName] = useState('')
    const [re, setRe] = useState('')
    const [department, setDepartment] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (initialData) {
            setName(initialData.name)
            setRe(initialData.re)
            setDepartment(initialData.department)
            setStatus(initialData.status)
        }
    }, [ initialData ])

    const userUpdate = (e, callback) => {
        e.preventDefault()
        var data = {
            name,
            re,
            department,
            status
        }

        updateUser(userId, data)
            .then(user => callback(user))
    }

    return [name, setName, re, setRe, department, setDepartment, status, setStatus, userUpdate]
}

export { useUserFormUpdate }