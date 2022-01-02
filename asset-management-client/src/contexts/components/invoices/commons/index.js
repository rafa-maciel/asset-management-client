import { useEffect, useState } from "react"
import * as Field from "../../../../components/invoices/commons/InvoiceFormFields"

const converDateFormat = date => {
    var dateArray = date.split("/")
    return dateArray[2] + "-" + dateArray[1] + "-" + dateArray[0]
}


function useInvoiceFormContext(readonly, initialData) {
    const [ endsAt, setEndsAt ] = useState("")
    const [ startsAt, setStartsAt ] = useState("")
    const [ number, setNumber ] = useState("")
    const [ vendor, setVendor ] = useState("")
    const [ vendorCNPJ, setVendorCNPJ ] = useState("")

    useEffect(() => {
        if( initialData ) {
            setNumber(initialData.number)
            setVendor(initialData.vendor)
            setVendorCNPJ(initialData.vendorCNPJ)

            setStartsAt(converDateFormat(initialData.startsAt))
            setEndsAt(converDateFormat(initialData.endsAt))
        }
    }, [ initialData ])

    const dataFromForm = () => {
        return {
            number,
            vendor,
            vendorCNPJ,
            startsAt,
            endsAt
        }
    }

    const fields = [
        <Field.InvoiceNumberField field={ number } onChangeField={ setNumber } readonly={readonly} />,
        <Field.InvoiceVendorField field={ vendor } onChangeField={ setVendor } readonly={readonly}/>,
        <Field.InvoiceVendorCNPJField field={ vendorCNPJ } onChangeField={ setVendorCNPJ} readonly={readonly} />,
        <Field.InvoiceStartsAtField field={ startsAt } onChangeField={ setStartsAt } readonly={readonly}/>,
        <Field.InvoiceEndsAtField field={ endsAt } onChangeField={ setEndsAt } readonly={readonly}/>
    ]

    return [ dataFromForm, fields ]
}

export { useInvoiceFormContext }

