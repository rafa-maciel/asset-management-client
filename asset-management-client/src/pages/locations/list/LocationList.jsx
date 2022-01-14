import React, { useState } from 'react'
import { Typography } from '@material-ui/core'

import { usePageMessage } from '../../../contexts/components/utils/pageMessage'
import { LocationNav, LocationTable } from '../../../components/locations/list'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'

export default function LocationList() {
    const [ showTableFilter, setShowTableFilter ] = useState(false)
    const [ message, addMessage, showMessage, hideMessage ] = usePageMessage()

    const handleFilterClose = () => {
        setShowTableFilter(false)
        addMessage('success', 'Filtro Atualizado', 'Você está vendo uma pequisa filtrada')
    }

    const handleTableError = error => {
        console.log(error)
        addMessage('error', 'Erro de Conexão', 'Não foi possivel contectar com a API')
    }

    return (
        <>
            {/* <Typography variant="h3" component="h1">
                Localizações de Ativos
            </Typography>

            <LocationNav onShowFilterClick={() => { setShowTableFilter(true) }}/> */}
        
            <LocationTable 
                showFilter={ showTableFilter }
                onCloseFilter={ handleFilterClose }
                onError={ handleTableError }/>


            <SnackbarPageMessage
                show={ showMessage }
                message={ message }
                onClose={ () => hideMessage() }/>
        </>
    )
}