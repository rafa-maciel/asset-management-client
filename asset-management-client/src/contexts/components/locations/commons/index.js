import { useFormFieldValid } from "../../../commons/useFormsUtils"

function useValidTitle( onValidChange ) {
    const checkValid = value => !value || value.length < 2 || value.length > 30
    const message = 'O titulo deve conter entre 2 e 30 caracteres'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

function useValidNotes( onValidChange ) {
    const checkValid = value => value && value.length > 120
    const message = 'As notas devem conter até 120 caracteres'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

export { useValidTitle, useValidNotes }