import React, { useState } from 'react'
import { useModelCreate } from '../../../contexts/components/models/create';

import { ModelForm } from '../commons/forms';

export default function ModelCreateForm({ onCreate }) {
    const [title, setTitle] = useState('')
    const [brand, setBrand] = useState('')
    const [type, setType] = useState('')

    const [ createModel ] = useModelCreate(title, brand, type)

    return (
        <ModelForm onValidFormSubmit={ () => createModel(onCreate) } 
            title={title}
            onChangeTitle={setTitle}
            brand={brand}
            onChangeBrand={setBrand}
            type={type}
            onChangeType={setType} />
    )
}