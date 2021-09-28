import { createNewUser } from "../../../../adapters/user"
import { useFormFieldValid } from "../../../commons/useFormsUtils"

function useValidUserName( onValidChange ) {
    const checkValid = value => !value || value.length < 4
    const message = 'O nome deve ter mais de 3 caracteres'
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

function useValidUserRe( onValidChange ) {
    const checkValid = value => !value || value < 1
    const message = 'O RE deve ser um número valido maior que 0'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

function useValidUserDepartment( onValidChange ) {
    const checkValid = value => !value || value.length > 50
    const message = 'O departamento deve conter até 50 caracteres'

    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

function useValidUserStatus( onValidChange ) {
    var statusChoices = ['ACTIVE', 'INACTIVE', 'LICENSE']
    const checkValid = value => !value || !statusChoices.includes(value) > 50
    const message = 'O status deve ser um valor valido'
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}


function useUserCreate(name, re, department, status) {
    const createUser = callback => {
        console.log('Creating user on API')
        
        var userData = {
            name,
            re,
            department,
            status
        }

        createNewUser(userData)
            .then(userCreated => {
                console.log('User has been created ' + userCreated)
                callback(userCreated)
            })
    }

    return [createUser]
}


export { useUserCreate, useValidUserName, useValidUserRe, useValidUserDepartment, useValidUserStatus }