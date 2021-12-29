import React from 'react'
import { updateContract } from '../../../adapters/contract'
import { ContractForm } from '../commons'


export default function ContractUpdateForm({ initialData, contractId, onUpdate }) {
    
    const handleFormSubmit = data => {
        updateContract(contractId, data)
            .then(contract => onUpdate(contract))
    }

    return (
        <ContractForm initialData={initialData}
            onSubmit={handleFormSubmit} />

    )
}