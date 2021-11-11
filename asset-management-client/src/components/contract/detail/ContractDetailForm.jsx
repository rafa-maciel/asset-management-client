import React from 'react'
import { useContractDetailForm } from '../../../contexts/components/contract/detail';
import { ContractForm } from '../commons';

export default function ContractDetailForm({ assetId }) {
    const [ contract ] = useContractDetailForm(assetId);

    return (
        <>
            <ContractForm initialData={contract} readonly={true} />
        </>
    )
}