import React from 'react'
import { createNewContract } from '../../../adapters/contract'
import { ContractForm } from '../commons'

export default function ContractCreateForm({ onCreate }) {
    
    const handleSubmit = data => {
        createNewContract(data)
            .then(contract => onCreate(contract))
    }

    return (
        <ContractForm onSubmit={handleSubmit} />
    )
}