import { useEffect, useState } from "react"
import * as Field from "../../../../components/invoices/commons/InvoiceFormFields"

const converDateFormat = date => {
    var dateArray = date.split("/")
    return dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0]
}


function useInvoiceFormContext(readonly, initialData) {
    const [ date, setDate ] = useState("")
    const [ number, setNumber ] = useState("")
    const [ vendor, setVendor ] = useState("")
    const [ vendorCNPJ, setVendorCNPJ ] = useState("")

    useEffect(() => {
        if( initialData ) {
            setNumber(initialData.number)
            setVendor(initialData.vendor)
            setVendorCNPJ(initialData.vendorCNPJ)

            setDate(converDateFormat(initialData.date))
        }
    }, [ initialData ])

    const dataFromForm = () => {
        return {
            number,
            vendor,
            vendorCNPJ,
            date
        }
    }

    const fields = [
        <Field.InvoiceNumberField field={ number } onChangeField={ setNumber } readonly={readonly} />,
        <Field.InvoiceVendorField field={ vendor } onChangeField={ setVendor } readonly={readonly}/>,
        <Field.InvoiceVendorCNPJField field={ vendorCNPJ } onChangeField={ setVendorCNPJ} readonly={readonly} />,
        <Field.InvoiceDateField field={ date } onChangeField={ setDate } readonly={readonly}/>,
    ]

    return [ dataFromForm, fields ]
}

export { useInvoiceFormContext }

