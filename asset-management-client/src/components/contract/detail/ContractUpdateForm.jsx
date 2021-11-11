import React from 'react'
import { updateContract } from '../../../adapters/contract';
import { useContractUpdateForm } from '../../../contexts/components/contract/update';
import { ContractForm } from '../commons';

export default function ContractCreationForm({ assetId, onSave }) {
    const [ contract ] = useContractUpdateForm(assetId)

    const handleSubmit = data => {
        updateContract(assetId, contract.id, data())
            .then(contractData => onSave(contractData))
    }

    return (
        <>
            <ContractForm 
                initialData={ contract }
                onSubmit={ handleSubmit } />
        </>
    )
}