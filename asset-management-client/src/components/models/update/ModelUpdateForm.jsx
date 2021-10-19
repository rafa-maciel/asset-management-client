import React from 'react'
import { useModelUpdateFormContext } from '../../../contexts/components/models/update'
import { ModelForm } from '../commons/forms'

export default function ModelUpdateForm({ initialData, modelId, onUpdate }) {
    const [
        title, setTitle,
        brand, setBrand,
        type, setType,
        modelUpdate
    ] = useModelUpdateFormContext( initialData, modelId )

    return (
        <ModelForm 
            onValidFormSubmit={ () => modelUpdate(onUpdate) }
            title={title}
            onChangeTitle={setTitle}
            brand={brand}
            onChangeBrand={setBrand}
            type={type}
            onChangeType={setType} />

    )
}
