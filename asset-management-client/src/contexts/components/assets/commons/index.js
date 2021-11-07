import { useFormFieldValid } from "../../../commons/useFormsUtils"

function useValidCompanyIdentification( onValidChange ) {
    const checkValid = value => !value || value.length < 0
    const message = 'A identificação do ativo deve conter mais de 1 caracter'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

export { useValidCompanyIdentification }