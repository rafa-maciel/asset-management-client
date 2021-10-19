import { useEffect, useState } from "react";
import { updateModel } from "../../../../adapters/models";

function useModelUpdateFormContext(initialData, modelId) {
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {
        if ( initialData ) {
            console.log(initialData)
            setTitle(initialData.title)
            setBrand(initialData.brand)
            setType(initialData.type)
        }
    }, [ initialData ])

    const modelUpdate = callback => {
        var data = {
            title,
            brand,
            type
        }

        updateModel(modelId, data)
            .then(model => callback(model))
    }

    return [ title, setTitle, brand, setBrand, type, setType, modelUpdate ]
}

export { useModelUpdateFormContext }