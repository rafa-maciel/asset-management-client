import React from 'react'
import { Dialog, DialogContent, Typography } from '@material-ui/core';
import { ContractCreateForm, ContractDeleteForm, ContractDetailForm, ContractNav, ContractUpdateForm } from '../../../components/contract/detail'
import { useContractDetailPageContext } from '../../../contexts/pages/contract/detail';

export default function ContractDetail({ assetId }) {
    const [ contract, setContract, 
        isModeCreation, isModeEdition, 
        isModeDeletion, setCreationMode, 
        setEditionMode, setDeletionMode, 
        setDefaultMode ] = useContractDetailPageContext(assetId);


    return (
        <>
            <ContractDetailForm assetId={ assetId }/>

            <ContractNav 
                contract={ contract }
                onClickAddContract={ () => setCreationMode() }
                onClickEditContract={ () => setEditionMode() }
                onClickDeleteContract={ () => setDeletionMode() } /> 
            
            <Dialog open={ isModeCreation() } onClose={ setDefaultMode } fullScreen>
                <DialogContent>
                    <Typography variant="h4">Adicionar Contrato</Typography>
                    <ContractCreateForm
                        assetId={ assetId }
                        onSave={ contractSaved => {
                            setContract(contractSaved)
                            setDefaultMode()
                        }} />
                </DialogContent>
            </Dialog>

            <Dialog open={ isModeEdition() } onClose={ setDefaultMode } fullScreen>
                <DialogContent>
                    <Typography variant="h4">Editar Contrato</Typography>
                    <ContractUpdateForm
                        assetId={ assetId }
                        onSave={ contractSaved => {
                            setContract(contractSaved)
                            setDefaultMode()
                        }} />
                </DialogContent>
            </Dialog>

            <Dialog open={ isModeDeletion() } onClose={ setDefaultMode } fullScreen>
                <DialogContent>
                    <Typography variant="h4">Remover Contrato</Typography>
                    <ContractDeleteForm
                        assetId={ assetId }
                        onDelete={ () => {
                            setDefaultMode()
                        }} />
                </DialogContent>
            </Dialog>

        </>
    )
}