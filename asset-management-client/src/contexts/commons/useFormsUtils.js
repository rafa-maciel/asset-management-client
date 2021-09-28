import { useEffect, useState } from "react"

function useFormFieldValid(invalidCheck, onValidChange) {
    const [invalidField, setInvalidField] = useState(false)

    useEffect(() => onValidChange(invalidField), [ invalidField, onValidChange ])

    const validate = value => {
        console.log('validating value ' + value)
        if (invalidCheck(value)) {
            setInvalidField(true)
        } else {
            setInvalidField(false)
        }
    }

    return [invalidField, validate]
}

function useFormInvalidCheck() {
    const [formInvalidFields, setFormInvalidFields] = useState(null)

    const checkInvalidField = (invalidFieldCheck, fieldName) => {
        var fields = formInvalidFields ? formInvalidFields : {}
        if (invalidFieldCheck) {
            fields[fieldName] = true
        } else {
            delete fields[fieldName]
        }
        setFormInvalidFields(fields)
    }

    const hasInvalidFields = () => {
        return Object.entries(formInvalidFields).length > 0
    }

    return [checkInvalidField, hasInvalidFields]
}

export { useFormFieldValid, useFormInvalidCheck }