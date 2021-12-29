import { deleteContract } from "../../../../adapters/contract"

function useContractDeleteConfirmationContext() {
    const contractDelete = (contractId, callback) => {
        deleteContract(contractId)
            .then(confirm => callback(confirm))
    }

    return [ contractDelete ]
}

export { useContractDeleteConfirmationContext }