import { createNewModel } from "../../../../adapters/models"
import { useFormFieldValid } from "../../../commons/useFormsUtils"

function useModelCreate(title, brand, type) {
    const createModel = callback => {
        var data = {
            title,
            brand,
            type
        }

        createNewModel(data)
            .then(model => callback(model))
    }

    return [ createModel ]
}

function useValidTitle( onValidChange ) {
    const checkValid = value => !value || value.length < 2 || value.length > 30
    const message = 'O titulo deve conter entre 2 e 30 caracteres'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

function useValidBrand( onValidChange ) {
    const checkValid = value => !value || value.length < 2 || value.length > 30
    const message = 'A Marca deve conter entre 2 e 30 caracteres'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

function useValidType( onValidChange ) {
    const checkValid = value => !value || value.length < 2 || value.length > 30
    const message = 'O Tipo deve conter entre 2 e 30 caracteres'
    
    const [invalid, validate] = useFormFieldValid(checkValid, onValidChange)

    return [message, invalid, validate]
}

export { useModelCreate, useValidTitle, useValidBrand, useValidType }