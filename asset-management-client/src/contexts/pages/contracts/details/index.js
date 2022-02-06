import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { findContract } from "../../../../adapters/contract";

function useContractDetailsPageContext() {
    const { state: { id: contractId }} = useLocation()
    const [contract, setContract] = useState(null)

    useEffect(() => {
        if ( contractId )
            findContract(contractId)
                .then(data => {
                    console.log(data)
                    setContract(data)})
    
         
    }, [ contractId ])

    return [ contract ]
}

export { useContractDetailsPageContext }