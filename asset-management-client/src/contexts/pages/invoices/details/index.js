import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { findInvoice } from "../../../../adapters/invoices";

function useInvoiceDetailPageContext() {
    const { state: { id: invoiceId }} = useLocation()
    const [invoice, setInvoice] = useState(null)

    useEffect(() => {
        if ( invoiceId )
            findInvoice(invoiceId)
                .then(data => {
                    setInvoice(data)})
    
         
    }, [ invoiceId ])

    return [ invoice ]

}

export { useInvoiceDetailPageContext }