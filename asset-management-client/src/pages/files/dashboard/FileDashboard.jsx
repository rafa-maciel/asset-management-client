import { Dialog, DialogContent, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { findFilesByAsset, findFilesByContract, findFilesByInvoice } from '../../../adapters/files'
import { FileCreate, FileList, FileNav } from '../../../components/files/dashboard'

export default function FileDashboard({ assetId=null, contractId=null, invoiceId=null }) {
    const [files, setFiles] = useState([])
    const [showAddDialog, setShowAddDialog] = useState(false)

    useEffect(() => {
        var fileList
        if (assetId) {
            fileList = findFilesByAsset(assetId)
        } else if ( contractId ) {
            fileList = findFilesByContract(contractId)
        } else if ( invoiceId ) {
            fileList = findFilesByInvoice(invoiceId)
        }

        if (fileList)
            fileList.then(filesList => setFiles(filesList))
            
    }, [ assetId, contractId, invoiceId ])

    const handleCreateFile = file => {
        var filesList = [...files]
        filesList.push(file)
        setShowAddDialog(false)
        setFiles(filesList)
    }

    const handleDeleteFile = file => {
        var filesList = files.filter((f, index) => f.id !== file.id)
        setFiles([...filesList])
    }

    return (
        <>
            <FileNav onClickAddFile={ () => setShowAddDialog(true) }/>
            <FileList
                files={files}
                onDelete={ handleDeleteFile }/>

            <Dialog open={ showAddDialog } onClose={ () => setShowAddDialog(false) }>
                <DialogContent>
                    <Grid container spacing={3}>
                        <FileCreate 
                            assetId={ assetId }
                            contractId={ contractId }
                            invoiceId={ invoiceId }
                            onCreate={ handleCreateFile } />
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    )
}