import React from 'react'
import { createNewContract } from '../../../adapters/contract';
import { ContractForm } from '../commons';

export default function ContractCreationForm({ assetId, onSave }) {
    
    const handleSubmit = data => {
        createNewContract(assetId, data())
            .then(contract => onSave(contract))
    }

    return (
        <>
            <ContractForm onSubmit={ handleSubmit } />
        </>
    )
}