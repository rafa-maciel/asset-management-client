import React from 'react'
import { useLocationTableContext } from '../../../contexts/components/locations/list'

import { LocationFilterForm } from '.';
import TableSelection from '../../commons/tables/TableSelection';
import { useState } from 'react';

export default function LocationTable({ onError }) {
    const [ locations, changeFilterParams, pagination, tableHeaders ] = useLocationTableContext(onError)
    const [ showFilter, setShowFilter ] = useState(false)
    
    const handleFilterForm = data => {
        changeFilterParams(data)
        setShowFilter(false)
    }
    
    const actionPaths = {
        delete: '/locations/delete', 
        update: '/locations/update',
        create: '/locations/create',
        onFilterClick: e => setShowFilter(true)
    }

    return (
        <>
            <TableSelection 
                tableTitle="Localizações"
                tableHeaders={ tableHeaders }
                tableRows={ locations }
                pagination={ pagination }
                actionPaths={ actionPaths } >

            </TableSelection>

            <LocationFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ e => setShowFilter(false) } />
        </>
    )
}