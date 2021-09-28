import { useEffect, useState } from "react"

function useFormFieldValid(invalidCheck, onValidChange) {
    const [invalidField, setInvalidField] = useState(false)

    useEffect(() => onValidChange(invalidField), [ invalidField, onValidChange ])

    const validate = value => {
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
    const [invalidForm, setInvalidForm] = useState(false)

    const checkInvalidField = (invalidFieldCheck, fieldName) => {
        var fields = formInvalidFields ? formInvalidFields : {}
        if (invalidFieldCheck) {
            fields[fieldName] = true
        } else {
            delete fields[fieldName]
        }
        checkInvalidFields(fields)
        setFormInvalidFields(fields)
    }

    const checkInvalidFields = fields => {
        setInvalidForm(fields && Object.entries(fields).length > 0)
    }

    return [checkInvalidField, invalidForm]
}

export { useFormFieldValid, useFormInvalidCheck }