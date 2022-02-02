import React, { useState } from 'react'

import { InvoiceFilterForm } from '.';
import { useInvoiceTableContext } from '../../../contexts/components/invoices/list';
import TableSelection from '../../commons/tables/TableSelection';

export default function InvoiceTable({ onError }) {
    const [ invoices, changeFilterParams, pagination, tableHeaders ] = useInvoiceTableContext(onError)
    const [ showFilter, setShowFilter ] = useState(false)

    const handleFilterForm = data => {
        changeFilterParams(data)
        setShowFilter(false)
    }

    const actionPaths = {
        delete: '/invoices/delete', 
        update: '/invoices/update',
        create: '/invoices/create',
        onFilterClick: e => setShowFilter(true)
    }

    return (
        <>
            <TableSelection 
                tableTitle="Localizações"
                tableHeaders={ tableHeaders }
                tableRows={ invoices }
                pagination={ pagination }
                actionPaths={ actionPaths } />

            <InvoiceFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ e => setShowFilter(false) } />
        </>
    )
}