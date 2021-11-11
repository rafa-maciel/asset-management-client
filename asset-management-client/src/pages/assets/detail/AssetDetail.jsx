import React from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core'
import { AssetInfo } from '../../../components/assets/detail'
import { useAssetDetailPageContext } from '../../../contexts/pages/assets/detail'
import { ContractDetail } from '../../contract'
import { NoteDashboard } from '../../notes'
import { FileDashboard } from '../../files'


export default function AssetDetail() {
    const [ asset, tabIndex, changeTabIndex ] = useAssetDetailPageContext()

    const Content = () => {
        switch (tabIndex) {        
            case 1:
                return <ContractDetail assetId={ asset.id } />
                            
            case 2:
                return <FileDashboard assetId={ asset.id } />
    
            default:
                return <NoteDashboard assetId={ asset ? asset.id : null } />
        }
    }

    return (
        <>
            <Typography variant="h3" component="h1">Detalhes do Ativo</Typography>

            <AssetInfo 
                asset={ asset } />

            <AppBar position="static">
                <Tabs value={ tabIndex } onChange={(e, index) => changeTabIndex(index)}>
                    <Tab label="Comentarios" id="simple-tab-1"/>
                    <Tab label="Contrato" id="simple-tab-2"/>
                    <Tab label="Arquivos" id="simple-tab-3"/>
                </Tabs>
            </AppBar>

            <Content />
        </>
    )
}