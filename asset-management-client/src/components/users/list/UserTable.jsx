import React, { useState } from 'react'
import { useUserSearch } from '../../../contexts/components/users/list/useUserSearch'

import { UserSearchForm } from '.';
import TableSelection from '../../commons/tables/TableSelection';

export default function UserTable( { onError } ) {
    const [ users, changeFilterParams, pagination, tableHeaders ] = useUserSearch(onError)      
    const [ showFilter, setShowFilter ] = useState(false)

    const handleFilterForm = data => {
        changeFilterParams(data)
        setShowFilter(false)
    }

    const actionPaths = {
        delete: '/users/delete', 
        update: '/users/update',
        create: '/users/create',
        onFilterClick: e => setShowFilter(true)
    }

    return (
        <>            
            <TableSelection 
                tableTitle="Responsáveis"
                tableHeaders={ tableHeaders }
                tableRows={ users }
                pagination={ pagination }
                actionPaths={ actionPaths } />

            <UserSearchForm onFormSubmit={ handleFilterForm }
                showModal={ showFilter }
                onCloseModal={ e => setShowFilter(false) } />
        </>
    )
}
