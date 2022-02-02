import React, { useState } from 'react'

import { useModelTableContext } from '../../../contexts/components/models/list/useModelTableContext'

import { ModelFilterForm } from '.';
import TableSelection from '../../commons/tables/TableSelection';

export default function ModelTable({ onError }) {
    const [ models, changeFilterParams, pagination, tableHeaders ] = useModelTableContext(onError)
    const [ showFilter, setShowFilter ] = useState(false)

    const handleFilterForm = data => {
        changeFilterParams(data)
        setShowFilter(false)
    }

    const actionPaths = {
        delete: '/models/delete', 
        update: '/models/update',
        create: '/models/create',
        onFilterClick: e => setShowFilter(true)
    }

    return (
        <>
            <TableSelection 
                tableTitle="Modelos de Ativos"
                tableHeaders={ tableHeaders }
                tableRows={ models }
                pagination={ pagination }
                actionPaths={ actionPaths } />
            

            <ModelFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ e => setShowFilter(false) } />
        </>
    )
}
