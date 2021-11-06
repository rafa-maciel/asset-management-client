import { Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { AssetNav, AssetTable } from '../../../components/assets/list'
import { SnackbarPageMessage } from '../../../components/commons/nav/SnackBarMessage'
import { usePageMessage } from '../../../contexts/components/utils/pageMessage'

export default function AssetList() {
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
            <Typography variant="h3" component="h1">
                Ativos
            </Typography>

            <AssetNav onShowFilterClick={() => { setShowTableFilter(true) }}/>
        
            <AssetTable 
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