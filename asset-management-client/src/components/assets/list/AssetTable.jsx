import React, { useState } from 'react'
import { useAssetTableContext } from '../../../contexts/components/assets/list'
import { AssetFilterForm } from '.';
import TableSelection from '../../commons/tables/TableSelection';


export default function AssetTable({ onError }) {
    const [ assets, changeFilterParams, pagination, tableHeaders ] = useAssetTableContext(onError)
    const [ showFilter, setShowFilter ] = useState(false)

    const handleFilterForm = data => {
        changeFilterParams(data)
        setShowFilter(false)
    }

    const actionPaths = {
        delete: '/assets/delete', 
        update: '/assets/update',
        create: '/assets/create',
        details: '/assets/detail',
        import: '/assets/import',
        onFilterClick: e => setShowFilter(true)
    }


    return (
        <>
            <TableSelection 
                tableTitle="Ativos | Dispositivos"
                tableHeaders={ tableHeaders }
                tableRows={ assets }
                pagination={ pagination }
                actionPaths={ actionPaths } >

            </TableSelection>

            <AssetFilterForm 
                onFormSubmit={ handleFilterForm }
                showFilter={ showFilter }
                onCloseFilter={ e => setShowFilter(false) } />
        </>
    )
}