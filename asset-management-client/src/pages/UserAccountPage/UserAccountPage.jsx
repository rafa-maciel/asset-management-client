import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import UserAccountSearch from '../../components/userAccountPageComponents/UserAccountSearch'

export default function UserAccountPage() {
    // Search Components
    const [showSearchModal, setShowSearchModal] = useState(false)

    return (
        <>
            <Typography variant="h3" component="h1">Contas de Usuários do Sistema</Typography>
            <Button onClick={() => {setShowSearchModal(true)}}>Filtro de Pesquisa</Button>
            
            <UserAccountSearch 
                showFilterModal={showSearchModal} 
                onCloseFilterModal={() => setShowSearchModal(false)} />
        </>
    )
}