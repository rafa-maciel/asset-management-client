import React, { useState } from 'react'
import TableSelection from '../../commons/tables/TableSelection';

import { useContractTableContext } from '../../../contexts/components/contracts/list';
import { ContractFilterForm } from '.';

export default function ContractTable({ onError }) {
    const [ contracts, changeFilterParams, pagination, tableHeaders ] = useContractTableContext(onError)
    const [ showFilter, setShowFilter ] = useState(false)

    const handleFilterForm = data => {
        changeFilterParams(data)
        setShowFilter(false)
    }

    const actionPaths = {
        delete: '/contracts/delete', 
        update: '/contracts/update',
        create: '/contracts/create',
        onFilterClick: e => setShowFilter(true)
    }

    return (
        <>
            <TableSelection
                tableTitle="Contratos"
                tableHeaders={ tableHeaders }
                tableRows={ contracts }
                pagination={ pagination }
                actionPaths={ actionPaths } />


            <ContractFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ e => setShowFilter(false) } />
        </>
    )
}